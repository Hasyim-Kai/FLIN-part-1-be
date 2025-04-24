import { Request, Response, NextFunction } from 'express';
const { check, validationResult } = require("express-validator");

export const createValidationFor = (route: string) => {
  switch (route) {
    case 'choose-chat':
      return [
        check('optionId')
          .not().isEmpty().withMessage('optionId cant be null')
      ];
    default:
      return [];
  }
}

export const checkValidationResult = (req: Request, res: Response, next: NextFunction) => {
  const result = validationResult(req);
  if (result.isEmpty()) { return next(); };
  res.status(422).json({ errors: result.array() });
}