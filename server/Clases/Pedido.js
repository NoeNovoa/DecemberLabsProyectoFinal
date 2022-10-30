class Pedido {
    constructor(
        idPedido,
        idEmpleado,
        idMenu,
        horarioPedido,
        fechaHoraSolicitud,
        fechaAlmuerzo,
        estaProcesado,
    ) {
        this.idPedido = idPedido;
        this.idEmpleado = idEmpleado;
        this.idMenu = idMenu;
        this.horarioPedido = horarioPedido;
        this.fechaHoraSolicitud = fechaHoraSolicitud;
        this.fechaAlmuerzo = fechaAlmuerzo;
        this.estaProcesado = estaProcesado;
    }
}
