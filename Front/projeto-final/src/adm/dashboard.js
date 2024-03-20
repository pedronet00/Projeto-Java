
import React, { useState, useEffect } from 'react';
import ListarVendas from '../api/Vendas/listarVendas';

function Dashboard() {

    //Selecionar total de instrumentos cadastrados
    const [totalInstrumentos, setTotalInstrumentos] = useState(0);

    useEffect(() => {
        fetch('http://localhost:8080/instrumento/contarInstrumentos')
            .then(response => response.json())
            .then(data => {
                setTotalInstrumentos(data);
            })
            .catch(error => {
                console.error('Erro ao buscar o total de instrumentos:', error);
            });
    }, []);

    //Selecionar total de instrumentos cadastrados
    const [totalClientes, setTotalClientes] = useState(0);

    useEffect(() => {
        fetch('http://localhost:8080/cliente/contarClientes')
            .then(response => response.json())
            .then(data => {
                setTotalClientes(data);
            })
            .catch(error => {
                console.error('Erro ao buscar o total de clientes:', error);
            });
    }, []);

    

    return (
        <div>
            <div className="row" style={{width: '80%', margin: 'auto', marginTop: '2%'}}>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Total de instrumentos</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{totalInstrumentos}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fa-solid fa-guitar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Ganhos</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">R$ 200.000,00</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Clientes
                                    </div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{totalClientes}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-users fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Pending Requests</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-4" style={{width: '80%', margin: '2% auto'}}>
                <div className="card-header" style={{backgroundColor: '#1b1b39', color: 'white'}}>
                    <i className="fas fa-dollar-sign me-1"></i>
                    Vendas
                </div>
                <div className="card-body">
                    <ListarVendas/>
                </div>
            </div>

            <div style={{display: 'flex', width: '80%', margin: '5% auto', justifyContent: 'space-evenly'}}>
                <div className="card shadow mb-4" style={{width: '50%'}}>
                    <div className="card-header py-3" style={{backgroundColor: '#1b1b39', color: 'white'}}>
                        <h6 className="m-0 font-weight-bold">Instrumentos vendidos (m = 100)</h6>
                    </div>
                    <div className="card-body">
                        <h4 className="small font-weight-bold">Server Migration <span
                                className="float-right">20%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '80%'}}
                                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Sales Tracking <span
                                className="float-right">40%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '50%'}}
                                aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Customer Database <span
                                className="float-right">60%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar" role="progressbar" style={{width: '60%'}}
                                aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Payout Details <span
                                className="float-right">80%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: '10%'}}
                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Account Setup <span
                                className="float-right">Complete!</span></h4>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}}
                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between" style={{backgroundColor: '#1b1b39', color: 'white'}}>
                            <h6 className="m-0 font-weight-bold">Revenue Sources</h6>
                            <div className="dropdown no-arrow">
                                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                    aria-labelledby="dropdownMenuLink">
                                    <div className="dropdown-header">Dropdown Header:</div>
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="chart-pie pt-4 pb-2">
                                <canvas id="myPieChart"></canvas>
                            </div>
                            <div className="mt-4 text-center small">
                                <span className="mr-2">
                                    <i className="fas fa-circle text-primary"></i> Direct
                                </span>
                                <span className="mr-2">
                                    <i className="fas fa-circle text-success"></i> Social
                                </span>
                                <span className="mr-2">
                                    <i className="fas fa-circle text-info"></i> Referral
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
