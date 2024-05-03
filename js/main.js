import { imageUploadInit } from './image-upload.js';
import { renderGallery } from './gallery.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

try {
  const pictures = await getData();
  renderGallery(pictures);
} catch (err) {
  showAlert(err.message);
}

imageUploadInit();
