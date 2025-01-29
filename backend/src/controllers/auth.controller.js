export const signup = (req, res) => {
    const { email, fullName, password } = req.body;
    try {
        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
        
    }
}

export const login = (req, res) => {
    res.send('Login route');
}

export const logout = (req, res) => {
    res.send('Logout route');
}

