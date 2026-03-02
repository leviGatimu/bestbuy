export const register = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "name, email, password are required" });
    }

    email = email.trim().toLowerCase();

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: "User already exists. Please login." });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const createdUser = await User.create({
      name,
      email,
      password: hashedPass,
    });

    const token = jwt.sign(
      { id: createdUser._id },
      process.env.jwt_secret,
      { expiresIn: "1d" }
    );

    return res.status(201).json({
      user: { id: createdUser._id, name: createdUser.name, email: createdUser.email },
      token,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "email and password are required" });
    }

    email = email.trim().toLowerCase();

    const existing = await User.findOne({ email });
    if (!existing) return res.status(404).json({ error: "Invalid credentials" });

    const isPassMatch = await bcrypt.compare(password, existing.password);
    if (!isPassMatch) return res.status(404).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: existing._id },
      process.env.jwt_secret,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      user: { id: existing._id, name: existing.name, email: existing.email },
      token,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};