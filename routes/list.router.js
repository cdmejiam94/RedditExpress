import express from "express";
import getListByType from "../controllers/list.controller.js";

const router = express.Router()
// const controller = new LoginController()

router.get('/:code&:list_type',
  async (req, res, next) => {
    try {
        const code = req.params.code;
        const list_type = req.params.list_type
        const postList = await getListByType(code, list_type);
        res.status(200).json(postList);
      } catch (error) {
        next(error);
      }
  }
);

export default router