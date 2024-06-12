import exp from "express";
import cors from 'cors';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = exp();

app.use(exp.json());
app.use(cors());

const JWT_SECRET = process.env.MY_SECRET_KEY;
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
    });

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    img: String,
    price: Number
});

const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);

const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }

        req.userId = decoded.userId;
        next();
    });
};

const authorizeUser = (req, res, next) => {
    next();
};

app.get("/", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.get("/products", (req, res) => {
    Product.find()
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to fetch products", error: err });
        });
});

app.get("/product/:id", (req, res) => {
    const { id } = req.params;
    Product.findById(id)
        .then(product => {
            if (!product) {
                return res.status(404).json({ message: "Product not found!" });
            }
            res.json(product);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to fetch product", error: err });
        });
});

app.post("/product", authenticateUser, authorizeUser, (req, res) => {
    const newProduct = new Product(req.body);
    newProduct.save()
        .then(product => {
            res.json(product);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to create product", error: err });
        });
});

app.put("/product/:id", authenticateUser, authorizeUser, (req, res) => {
    const { id } = req.params;
    Product.findByIdAndUpdate(id, req.body, { new: true })
        .then(product => {
            if (!product) {
                return res.status(404).json({ message: "Product not found!" });
            }
            res.json(product);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to update product", error: err });
        });
});

app.delete("/product/:id", authenticateUser, authorizeUser, (req, res) => {
    const { id } = req.params;
    Product.findByIdAndDelete(id)
        .then(product => {
            if (!product) {
                return res.status(404).json({ message: "Product not found!" });
            }
            res.json({ message: "Product deleted successfully" });
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to delete product", error: err });
        });
});

app.post("/register", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }
    const newUser = new User({ username, password });
    newUser.save()
        .then(user => {
            res.json({ message: "User registered successfully" });
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to register user", error: err });
        });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }
    User.findOne({ username, password })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: "Invalid credentials" });
            }
            const token = jwt.sign({ userId: user._id }, JWT_SECRET);
            res.json({ token });
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to login", error: err });
        });
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
