import { body, validationResult } from "express-validator";

export const validateRequest = [
  body("name")
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 5 }).withMessage("Name must be at least 5 characters"),

  body("price")
    .notEmpty().withMessage("Price is required")
    .isFloat({ gt: 0 }).withMessage("Price should be a positive value"),

  body("imageUrl")
    .notEmpty().withMessage("Image URL is required")
    .isURL().withMessage("Invalid URL"),

  (req, res, next) => {
    const errors = validationResult(req);

    console.log("errors:", errors.array());

    if (!errors.isEmpty()) {
      return res.render("new-product", {
        errorMessages: errors.array().map(e => e.msg),
      });
    }

    next();
  },
];