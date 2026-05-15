import multer from "multer";
import path from "path";

// configure storage
const storageConfig = multer.diskStorage({

    destination: (req, file, cb) => {

        cb(null, path.join(path.resolve(), "public", "images"));
    },

    filename: (req, file, cb) => {

        const name = Date.now() + "-" + file.originalname;

        cb(null, name);
    }
});

// file filter
const fileFilter = (req, file, cb) => {

    const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp"
    ];

    if (allowedTypes.includes(file.mimetype)) {

        cb(null, true);

    } else {

        cb(new Error("Only image files are allowed"), false);
    }
};

// multer middleware
const upload = multer({

    storage: storageConfig,
    fileFilter: fileFilter
});

export default upload;