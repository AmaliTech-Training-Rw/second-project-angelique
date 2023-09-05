import Playlist from '../models/playlistModel.js';


const createPlaylist = async (req, res) => {
  try {
    const { name, user, songs } = req.body;
    const newPlaylist = await Playlist.create({ name, user, songs });
    res.status(201).json(newPlaylist);
  } catch (error) {
    res.status(500).json({ error: 'Error creating the playlist' });
  }
};

const addSongToPlaylist = async (req, res) => {
  try {
    const { playlistId, songId } = req.params;
    const playlist = await Playlist.findByIdAndUpdate(playlistId, { $push: { songs: songId } }, { new: true });
    if (!playlist) {
      return res.status(404).json({ error: 'Playlist not found' });
    }
    res.json(playlist);
  } catch (error) {
    res.status(500).json({ error: 'Error adding the song to the playlist' });
  }
};

const getPlaylistContents = async (req, res) => {
  try {
    const { id } = req.params;
    const playlist = await Playlist.findById(id).populate('songs');
    if (!playlist) {
      return res.status(404).json({ error: 'Playlist not found' });
    }
    res.json(playlist.songs);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving playlist contents' });
  }
};

export {getPlaylistContents,addSongToPlaylist,createPlaylist}