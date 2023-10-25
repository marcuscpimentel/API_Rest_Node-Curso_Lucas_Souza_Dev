import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";

//bodyValidation (middleware)

interface ICidade {
  nome: string;
  estado: string;
}

//queryValidation (middleware)

interface IFilter {
  filter?: string;
  limit?: number;
}

//O argumento de validation é passado como função para que seja possível definir a tipagem dos objetos
export const createValidator = validation((getSchema) => ({
  body: getSchema<ICidade>(
    yup.object().shape({
      nome: yup.string().required().min(3),
      estado: yup.string().required().min(3),
    }),
  ),
  query: getSchema<IFilter>(
    yup.object().shape({
      filter: yup.string().optional().min(3),
    }),
  ),
}));

//create (controller)

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  console.log(req.body);

  return res.send("Create!");
};
