import artistModel from '../models/artist.js';

// insert
export const insertArtist = async (req, res) => {
    const { name, imgUrl, instagram, twitter, facebook } = req.body;
    const newArtist = artistModel({ name, imgUrl, instagram, twitter, facebook });

    await newArtist.save().then((result) => {
        return res.status(201).send({ status: 201, artist: result })
    }).catch((err) => {
        return res.status(400).send({ status: 400, msg: err })
    });
}
// select
export const FindArtist = async (req, res) => {
    let id = req.params.id;
    if (id) {
        await artistModel.findById(id).then((data) => {
            return res.status(200).json({ status: "success", data });
        }).catch((err) => {
            return res.status(400).json({ status: "error", msg: "No Artist found with this id", id });
        });
    }

    await artistModel.find({}).then((data) => {
        return res.status(200).json({ status: "success", data });
    }).catch((err) => {
        return res.status(400).json({ status: "error", msg: "No Record found" });

    })
}
// update 
export const UpdateArtist = async (req, res) => {
    const { id, name, imgUrl, instagram, twitter, facebook } = req.body;
    const filter = { _id: id };
    const options = {
        upset: true,
        new: true
    }

    await artistModel.findOneAndUpdate(filter, { name, imgUrl, instagram, twitter, facebook }, options).then((data) => {
        return res.status(204).json({ status: "success", msg: "data has been deleted Successfully" });
    }).catch((error) => {
        return res.status(400).send({ status: 400, msg: err })
    });
}

// delete
export const DeleteArtist = async (req, res) => {
    let id = req.params.id;
    const filter = { _id: id };
    if (id) {
        await artistModel.deleteOne(filter).then((data) => {
            return res.status(200).json({ status: "success", msg: "data has been deleted Successfully" });
        }).catch((err) => {
            return res.status(400).json({ status: "error", msg: "Something went wrong", err });
        });
    }

    return res.status(400).json({ status: "error", msg: "Please add Artist Id" });

}
