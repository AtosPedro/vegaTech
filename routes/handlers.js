const express = require("express");
const router = express.Router();
const db = require("../models");


// Utilites functions
const Utils = {
  getDateValues(today) {
    let year = today.getFullYear();
    let month =
      today.getMonth() + 1 < 10
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1;
    let day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    return [year, month, day, hour, minute, second];
  },
  formatDate(today) {
    today = Utils.getDateValues(today);

    let date = `${today[0]}-${today[1]}-${today[2]} ${today[3]}:${today[4]}:${today[5]}`;
    return date;
  },

};



//home
router.get("/", (req, res) => {
  db.Material.findAll()
    .then((material) => {
      db.Supplier.findAll()
        .then((supplier) => {
          
          res.render("home", {
            material: material,
            supplier: supplier,                       
            style: "home.css",
          });
        })
        .catch((err) => {
          Supplier.sync();
        });
    })
    .catch(() => {
      Material.sync();
    });
});
//Supplier Form route
router.get("/formsup", (req, res) => {  
    res.render("supplier", {
      style: "supplierForm.css",
      listOfSuppliers: listOfSuppliers
    })});
//Add supplier route
router.post("/sup", (req, res) => {
  var currentDate = new Date();
  currentDate = Utils.formatDate(currentDate);

  db.Supplier.create({
    name: req.body.supName,
    cnpj: req.body.supCnpj,
    cep: req.body.supCep,
    qrCode: `%${req.body.supCnpj}% - %${req.body.supCep}% / CAD.%${currentDate}%`,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.send(err.message);
    });
});
//delete supplier routes
router.get("/supdel/:id", (req, res) => {
  db.Supplier.destroy({ where: { supplier_id: req.params.id } })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.send(err.message);
    });
});
//update supplier routes
router.get("/updatesup/:id", (req, res) => {
  db.Supplier.findAll().then((supplier) => {
    res.render("updateSup", {
      obj: req.params.id,
      supplier: { where: { supplier_id: req.params.id } },
      style: "updateFormMaterial.css",
    });
  });
});
router.post("/updatesup/edit", (req, res) => {
  db.Supplier.update(
    {
      cnpj: req.body.supCnpj,
      cep: req.body.supCep,
      name: req.body.supName,
    },
    { where: { supplier_id: req.body.upSupplierId } }
  )
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.send(err.message);
    });
});
//Material Form route
router.get("/formmat", (req, res) => {

  db.Supplier.findAll().then((supplier) => {
      res.render('supplier', {
        supplier: supplier,
        style: 'supplierForm.css'
      })
  });
});
//Add material route
router.post("/mat", (req, res) => {
  db.Material.create({
    code: req.body.matCode,
    supplier_id: req.body.matSuppliers,
    name: req.body.matName,
    description: req.body.matDescription,
    fiscalCode: req.body.matFiscalCode,
    specie: req.body.matSpecie,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.send(err.message);
    });
});
//update material route

router.get("/matup/:id", (req, res) => {
  db.Supplier.findAll().then((supplier) => {
    res.render("updateMat", {
      obj: req.params.id,
      supplier: supplier,
      style: "updateFormMaterial.css",
    });
  });
});
router.post("/matup/edit", (req, res) => {
  db.Material.update(
    {
      code: req.body.matCode,
      name: req.body.matName,
      description: req.body.matDescription,
      fiscalCode: req.body.matFiscalCode,
      specie: req.body.matSpecie,
    },
    { where: { material_id: req.body.upMaterialId } }
  )
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.send(err.message);
    });
});


//Delete Material route
router.get("/matdel/:id", (req, res) => {
  db.Material.destroy({ where: { material_id: req.params.id } })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.send(err.message);
    });
});

module.exports = router;
