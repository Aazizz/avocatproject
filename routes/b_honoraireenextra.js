const bodyParser = require("body-parser");
const express = require("express");
const root2 = express.Router();
const cors = require("cors");
const pool = require("../db");

//RouTES
// pour l'ajout
root2.post("/honoraireenextra", async(req, res) => {
    try {
        const { libelle, libelle_francais, montant } = req.body;

        const newTodo2 = await pool.query(
            "INSERT INTO public.honoraireenextra (libelle, libelle_francais,montant) VALUES ($1, $2,$3) ON CONFLICT (libelle) DO UPDATE SET libelle_francais =$2, montant=$3 ", [libelle, libelle_francais, montant]
        );
        res.json(newTodo2);
    } catch (err) {
        console.error(err.message);
    }
});
//pour la modification
root2.post("/honoraireenextra/modif", async(req, res) => {
    try {
        const { id, libelle, libelle_francais, montant } = req.body;

        const newTodo2 = await pool.query(
            "UPDATE honoraireenextra SET libelle=$2,libelle_francais=$3, montant=$4 WHERE id=$1  ", [id, libelle, libelle_francais, montant]
        );
        res.json(newTodo2);
    } catch (err) {
        console.error(err.message);
    }
});
//selection
root2.get("/honoraireenextra", async(req, res) => {
    try {
        const newTodo = await pool.query(" SELECT * FROM honoraireenextra");
        res.json(newTodo.rows);
    } catch (err) {
        console.error(err.message);
    }
    // pour la suppression
    root2.post("/honoraireenextra/delete", async(req, res) => {
        try {
            const { id } = req.body;
            const newTodo1 = await pool.query(
                " DELETE FROM public.honoraireenextra WHERE id=$1", [id]
            );
            res.json(newTodo1);
        } catch (err) {
            console.error(err.message);
        }
    });
});

module.exports = root2;