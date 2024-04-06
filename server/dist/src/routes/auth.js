import { Router } from "express";
import { createAccount, loginUser, getAllUsers, modifyUser, deleteUser, logoutUser, getSingleUser } from "../controllers/auth.js";
import { validateUserRegister, validateUserLogin, validateUserUpdate } from '../middleware/userValidation.js';
import { adminAuthJWT, userAuthJWT } from '../middleware/auth.js';
const router = Router();
router.post("/create", validateUserRegister, createAccount);
router.post("/login", validateUserLogin, loginUser);
router.get("/all", adminAuthJWT, getAllUsers);
router.put("/", userAuthJWT, validateUserUpdate, modifyUser);
router.delete("/", userAuthJWT, deleteUser);
router.get('/logout', userAuthJWT, logoutUser);
router.get('/you', userAuthJWT, getSingleUser);
export default router;
//# sourceMappingURL=auth.js.map