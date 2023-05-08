import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

// L'objet "models" est fourni par la bibliothèque mongoose et stocke tous les modèles enregistrés. Si un modèle nommé "user" existe déjà dans l'objet "models", il assigne ce modèle existant à la variable "User". Cela empêche la redéfinition du modèle et garantit que le modèle existant est réutilisé.

//Si un modèle nommé "User" n'existe pas dans l'objet "models", la fonction "model" de Mongoose est appelée pour créer un nouveau modèle. Le modèle nouvellement créé est assigné à la variable "user"
const User = models.User || model("User", UserSchema);

export default User;
