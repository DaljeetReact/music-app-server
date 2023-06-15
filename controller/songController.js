import songModal from "../models/song.js"

// insert
export const insertSong = async (req, res) => {
    const { name, imgUrl,songUrl,album,artist,language,category} = req.body;
    const newSong = songModal({ name, imgUrl,songUrl,album,artist,language,category});

    await newSong.save().then((result) => {
        return res.status(201).send({ status: 201, Song: result })
    }).catch((err) => {
        return res.status(400).send({ status: 400, msg: err })
    });
}
// select
export const FindSong = async (req, res) => {
    let id = req.params.id;
    if (id) {
        await songModal.findById(id).then((data) => {
            return res.status(200).json({ status: "success", data });
        }).catch((err) => {
            return res.status(400).json({ status: "error", msg: "No Song found with this id", id });
        });
    }

    await songModal.find({}).then((data) => {
        return res.status(200).json({ status: "success", data });
    }).catch((err) => {
        return res.status(400).json({ status: "error", msg: "No Record found" });

    })
}
// update 
export const UpdateSong = async (req, res) => {
    const { id, name, imgUrl } = req.body;
    const filter = { _id: id };
    const options = {
        upset: true,
        new: true
    }
    if(!id){
        return res.status(400).send({ status: "error", msg:"Invalid id" })

    }
    await songModal.findOneAndUpdate(filter, { name, imgUrl,songUrl,album,artist,language,category}, options).then((data) => {
        return res.status(204).json({ status: "success", msg: "data has been deleted Successfully" });
    }).catch((error) => {
        return res.status(400).send({ status: "error", msg: err })
    });
}

// delete
export const DeleteSong = async (req, res) => {
    let id = req.params.id;
    const filter = { _id: id };
    if (id) {
        await songModal.deleteOne(filter).then((data) => {
            return res.status(200).json({ status: "success", msg: "data has been deleted Successfully" });
        }).catch((err) => {
            return res.status(400).json({ status: "error", msg: "Something went wrong", err });
        });
    }

    return res.status(400).json({ status: "error", msg: "Please add Song Id" });

}
