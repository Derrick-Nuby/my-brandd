"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_1 = __importDefault(require("./routes/auth"));
const article_1 = __importDefault(require("./routes/article"));
const comment_1 = __importDefault(require("./routes/comment"));
const like_1 = __importDefault(require("./routes/like"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use('/api/user', auth_1.default);
app.use('/api/article', article_1.default);
app.use('/api/comment', comment_1.default);
app.use('/api/like', like_1.default);
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/Brand-DB';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose_1.default
    .connect(uri)
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch(error => {
    throw error;
});
