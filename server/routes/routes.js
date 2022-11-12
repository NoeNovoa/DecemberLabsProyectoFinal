import express, { Router } from 'express'
import { createMenu, getAllMenus, getMenu, createMenu, deleteMenu, updateMenu } from '../controllers/menuController.js'
const router = express.Router()

router.get('/',getAllMenus)
router.get('/:id',getMenu)
router.post('/',createMenu)
router.put('/:id',updateMenu)
router.delete('/:id',deleteMenu)


export default router