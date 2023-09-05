import express from 'express';
import * as AlbumController from '../controllers/albumController.js';

const router = express.Router();


router.post('/create', AlbumController.createAlbum);
router.put('/update/:id', AlbumController.updateAlbum);
router.delete('/delete/:id', AlbumController.deleteAlbum);
router.get('/read/:id', AlbumController.getAlbumById);

export default router;