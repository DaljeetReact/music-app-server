import albumModal from "../models/album.js"

// insert
export const insertAlbum = async (req, res) => {
    const { name, imgUrl } = req.body;
    const newAlbum = albumModal({ name, imgUrl });

    await newAlbum.save().then((result) => {
        return res.status(201).send({ status: 201, Album: result })
    }).catch((err) => {
        return res.status(400).send({ status: 400, msg: err })
    });
}
// select
export const FindAlbum = async (req, res) => {
    let id = req.params.id;
    if (id) {
        await albumModal.findById(id).then((data) => {
            return res.status(200).json({ status: "success", data });
        }).catch((err) => {
            return res.status(400).json({ status: "error", msg: "No Album found with this id", id });
        });
    }

    await albumModal.find({}).then((data) => {
        return res.status(200).json({ status: "success", data });
    }).catch((err) => {
        return res.status(400).json({ status: "error", msg: "No Record found" });

    })
}
// update 
export const UpdateAlbum = async (req, res) => {
    const { id, name, imgUrl } = req.body;
    const filter = { _id: id };
    const options = {
        upset: true,
        new: true
    }
    if(!id){
        return res.status(400).send({ status: "error", msg:"Invalid id" })

    }
    await albumModal.findOneAndUpdate(filter, { name, imgUrl }, options).then((data) => {
        return res.status(204).json({ status: "success", msg: "data has been deleted Successfully" });
    }).catch((error) => {
        return res.status(400).send({ status: "error", msg: err })
    });
}

// delete
export const DeleteAlbum = async (req, res) => {
    let id = req.params.id;
    const filter = { _id: id };
    if (id) {
        await albumModal.deleteOne(filter).then((data) => {
            return res.status(200).json({ status: "success", msg: "data has been deleted Successfully" });
        }).catch((err) => {
            return res.status(400).json({ status: "error", msg: "Something went wrong", err });
        });
    }

    return res.status(400).json({ status: "error", msg: "Please add Album Id" });

}
