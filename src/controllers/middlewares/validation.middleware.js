import { body, validationResult } from "express-validator";

export const validateRequest = [

  // Name Validation
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 5 })
    .withMessage("Name must be at least 5 characters"),

  // Price Validation
  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ gt: 0 })
    .withMessage("Price should be a positive value"),

  // Image URL Validation
  // Image Validation
body("imageUrl")
  .custom((value, { req }) => {

    // allow uploaded file
    if (req.file) {
      return true;
    }

    // allow external URL
    if (value && value.trim() !== "") {
      return true;
    }

    throw new Error(
      "Please upload an image or provide image URL"
    );
  }),
  // Final Middleware
  (req, res, next) => {

    const errors = validationResult(req);

    console.log("errors:", errors.array());

    // If validation fails
    if (!errors.isEmpty()) {

      // UPDATE PRODUCT PAGE
      if (req.originalUrl.includes("update-product")) {

        return res.render("update-product", {

          errorMessages: errors.array().map(
            (e) => e.msg
          ),

          product: {
            id: req.params.id,
            name: req.body.name,
            desc: req.body.desc,
            price: req.body.price,
            imageUrl: req.body.imageUrl
          }
        });
      }

      // NEW PRODUCT PAGE
      return res.render("new-product", {

        errorMessages: errors.array().map(
          (e) => e.msg
        ),
      });
    }

    next();
  },
];