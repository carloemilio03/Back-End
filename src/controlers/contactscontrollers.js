// llamada de la bd 

const getAllContacts = async(req, res) => {
  try {
    res.status(200).send({
      status: "ok",
      message: "Obtenido correctamente",
      data : [
        {"nombre": "José", "numero": 9989444},
        {"nombre": "Juan", "numero": 5552594},
        {"nombre": "nini", "numero": 4494665}
      ]
    });
  } catch (error) {
    console.log(error)
    res.status(400).send({ // Corregido "sed" a "send"
      status: "No se obtuvieron contactos", // Corregido el mensaje
      message: "Hubo error al obtener los contactos",
      error: error
    });
  }
}

const createcontact = async(req, res) => {
  try {
    console.log(req.body);
    // Desestructuración
    const { nombre, numero } = req.body;

    if (!nombre || !numero) { // Verificación de datos recibidos
      return res.status(400).send({
        status: "Error",
        message: "Faltan campos requeridos (nombre o numero)"
      });
    }

    console.log(nombre, numero);

    res.status(201).send({
      status: "Se creó correctamente",
      message: "Contacto creado correctamente"
    });
  } catch (error) {
    console.log(error)
    res.status(400).send({ // Corregido "sed" a "send"
      status: "No se creó el contacto",
      message: "Contacto no creado",
      error: error
    });
  }
}

const getContact = async(req, res) => {
  try {
      // Ejecuta alguna función
      console.log(req.params);
      // Desestructuración
      const { id } = req.params;
      console.log(id);

      res.status(200).send({
        status: "Obtenido correctamente",
        message: "Contacto recibido",
        data: { "nombre": "José", "numero": 9989444 }
      });
  } catch (error) {
      console.log(error);

      res.status(400).send({ // Corregido "sed" a "send"
        status: "No existe el contacto",
        message: "Contacto inexistente",
        error: error
      });
  }
}

const findContact = async(req, res) => {
  try {
    console.log(req.query);

    res.status(200).send({
      status: "Contactos encontrados",
      message: "Todos los contactos encontrados con esos queries",
      data: [
        { "nombre": "Andres", "Numero": 99816165 },
        { "nombre": "Andy", "Numero": 89184532 },
        { "nombre": "Antonio", "Numero": 29982166 }
      ]
    });
  } catch (error) {
    console.log(error);

    res.status(400).send({ // Corregido "sed" a "send"
      status: "Contactos no encontrados",
      message: "No se encontraron contactos",
      error: error
    });
  }
}

module.exports = {
  getAllContacts,
  getContact,
  createcontact,
  findContact
}
