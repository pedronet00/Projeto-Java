function Index(){

    return(
        <div>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#1b1b39'}}>
                <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="/" style={{color: 'white'}}><img src='../../img/logo.png' style={{width: '70px'}}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!" style={{color: 'white'}}>Home</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'white'}}>Produtos</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#!">Todos os produtos</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#!">Violões</a></li>
                                    <li><a className="dropdown-item" href="#!">Pianos</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#!" style={{color: 'white'}}>Sobre nós</a></li>

                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-light" type="submit">
                                <i className="bi-cart-fill me-1"></i>
                                Carrinho
                                <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <header className="bg-dark py-5" style={{backgroundImage: 'url(../../img/guitar.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height: '400px'}}>
                
            </header>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        
                                        <h5 className="fw-bolder">Fancy Product</h5>
                                        
                                        $40.00 - $80.00
                                    </div>
                                </div>
                                
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                
                                <div className="badge bg-dark text-white position-absolute">Sale</div>
                                
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        
                                        <h5 className="fw-bolder">Special Item</h5>
                                        
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        
                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        $18.00
                                    </div>
                                </div>
                                
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                
                                <div className="badge bg-dark text-white position-absolute" >Sale</div>
                                
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        
                                        <h5 className="fw-bolder">Sale Item</h5>
                                        
                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        $25.00
                                    </div>
                                </div>
                                
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        
                                        <h5 className="fw-bolder">Popular Item</h5>
                                        
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        
                                        $40.00
                                    </div>
                                </div>
                                
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                
                                <div className="badge bg-dark text-white position-absolute">Sale</div>
                                
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        
                                        <h5 className="fw-bolder">Sale Item</h5>
                                        
                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        $25.00
                                    </div>
                                </div>
                                
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        
                                        <h5 className="fw-bolder">Fancy Product</h5>
                                        
                                        $120.00 - $280.00
                                    </div>
                                </div>
                                
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                
                                <div className="badge bg-dark text-white position-absolute">Sale</div>
                                
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        
                                        <h5 className="fw-bolder">Special Item</h5>
                                        
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        
                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        $18.00
                                    </div>
                                </div>
                                
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        
                                        <h5 className="fw-bolder">Popular Item</h5>
                                        
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        
                                        $40.00
                                    </div>
                                </div>
                                
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                <main className="mt-4 mb-5" style={{width: '82%', margin: 'auto'}}>
                    <div className="container">
                    <div className="row">
                        <div className="col-md-8 mb-4">
                        <section className="border-bottom mb-4">
                            <img src="https://cdn.pixabay.com/photo/2016/08/01/07/25/piano-1560580_640.jpg" style={{width: '100%', height: '500px'}}
                            className="img-fluid shadow-2-strong rounded mb-4" alt="" />

                            <div className="row align-items-center mb-4">
                            <div className="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg" className="rounded shadow-1-strong me-2"
                                height="35" alt="" loading="lazy" />
                                <span> Publicado por <a href="https://instagram.com/pedronet00" target="_blank" className="text-dark">Pedro Stabile Neto</a>, em  <u>20/03/2024</u></span>
                                
                            </div>

                            <div className="col-lg-6 text-center text-lg-end">
                                <button type="button" className="btn btn-primary px-3 me-1" data-mdb-ripple-init>
                                <i className="fab fa-facebook-f"></i>
                                </button>
                                <button type="button" className="btn btn-primary px-3 me-1" data-mdb-ripple-init>
                                <i className="fab fa-linkedin"></i>
                                </button>
                                <button type="button" className="btn btn-primary px-3 me-1" data-mdb-ripple-init>
                                <i className="fas fa-comments"></i>
                                </button>
                            </div>
                            </div>
                        </section>

                        <section>
                            <p>
                            Quando pensamos em instrumentos musicais que capturam a essência da melodia e da expressão, poucos conseguem rivalizar com a majestade e a versatilidade do piano. Este instrumento de teclas, com sua história rica e som incomparável, continua a encantar músicos e ouvintes ao redor do mundo.
                            </p>

                            <p><strong>Tecnologia Moderna: O Piano Digital</strong></p>

                            <p>
                            Embora muitos amantes da música valorizem a autenticidade e o som rico de um piano acústico, a tecnologia moderna trouxe consigo uma nova forma de explorar o mundo do piano: o piano digital. Com avanços em simulação de som e sensibilidade ao toque, os pianos digitais oferecem uma alternativa convincente aos pianos acústicos, muitas vezes com a vantagem de serem mais portáteis e acessíveis.
                            </p>

                            <p><strong>O Prazer de Tocar!</strong></p>

                            <p>
                            Para músicos e amadores, tocar piano é uma experiência gratificante e terapêutica. Do simples ato de deslizar os dedos sobre as teclas até a complexidade de dominar uma peça desafiadora, cada momento passado com um piano é uma jornada de descoberta e crescimento pessoal.                            </p>

                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, temporibus nulla
                            voluptatibus accusantium sapiente doloremque. Doloribus ratione laboriosam culpa. Ab
                            officiis quidem, debitis nostrum in accusantium dolore veritatis eius est?
                            </p>
                        </section>

                        <section className="text-center border-top border-bottom py-4 mb-4">
                            <p><strong>Compartilhe com seus amigos:</strong></p>

                            <button type="button" className="btn btn-primary me-1" data-mdb-ripple-init>
                            <i className="fab fa-facebook-f"></i>
                            </button>
                            <button type="button" className="btn btn-primary me-1" data-mdb-ripple-init>
                            <i className="fab fa-linkedin"></i>
                            </button>
                            <button type="button" className="btn btn-primary me-1" data-mdb-ripple-init>
                            <i className="fas fa-comments me-2"></i>Add comment
                            </button>
                        </section>

                        <section className="border-bottom mb-4 pb-4">
                            <div className="row">
                            <div className="col-3">
                                <img src="../../img/pedro.jpeg"
                                className="img-fluid shadow-1-strong rounded" alt="" />
                            </div>

                            <div className="col-9">
                                <p className="mb-2"><strong>Pedro Stabile Neto</strong></p>
                                <a href="" className="text-dark"><i className="fab fa-facebook-f me-1"></i></a>
                                <a href="" className="text-dark"><i className="fab fa-linkedin me-1"></i></a>
                                <a href="" className="text-dark"><i className="fab fa-instagram me-1"></i></a>
                                <p>
                                Trabalhou como desenvolvedor por um ano e meio. Começou a se interessar por programação no
                                ensino médio, e desde lá tentou aprender o básico de desenvolvimento web. Hoje, está no 7º
                                termo de Sistemas de Informação, trabalha com HTML, CSS, JS, PHP e MYSQL. Aprende Laravel e
                                React.
                                </p>
                                <p>
                                Enquanto Desenvolvedor Júnior, deu manutenção no sistema da empresa - um CRM
                                imobiliário -, refatorou algumas páginas e criou novas funcionalidades. A linguagem de
                                programação predominante na empresa é o PHP, o qual trabalhou e desenvolveu tudo
                                anteriormente citado, além do MySQL, HTML, CSS, JS e JQuery. Além disso, documentou
                                uma API inteira através do Swagger, utilizei o FTP Filezilla e WinSCP. Por fim, testou as
                                funcionalidades que outros desenvolvedores construíam, com um olhar crítico e tentando
                                encontrar possíveis brechas ou falhas na funcionalidade.
                                </p>
                            </div>
                            </div>
                        </section>

                        

                        <section>
                            <p className="text-center"><strong>Leave a reply</strong></p>

                            <form>
                            <div className="form-outline mb-4" data-mdb-input-init>
                                <input type="text" id="form4Example1" className="form-control" />
                                <label className="form-label" for="form4Example1">Name</label>
                            </div>

                            <div className="form-outline mb-4" data-mdb-input-init>
                                <input type="email" id="form4Example2" className="form-control" />
                                <label className="form-label" for="form4Example2">Email address</label>
                            </div>

                            <div className="form-outline mb-4" data-mdb-input-init>
                                <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                                <label className="form-label" for="form4Example3">Text</label>
                            </div>

                            <div className="form-check d-flex justify-content-center mb-4">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                                <label className="form-check-label" for="form4Example4">
                                Send me a copy of this comment
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mb-4" data-mdb-ripple-init>
                                Publish
                            </button>
                            </form>
                        </section>
                        </div>

                        <div className="col-md-4 mb-4">
                        <section className="sticky-top">
                            <section className="text-center border-bottom pb-4 mb-4">
                            <div className="bg-image hover-overlay mb-4" data-mdb-ripple-init>
                                <img
                                src="https://img.freepik.com/fotos-gratis/kit-de-bateria-em-um-fundo-escuro-com-iluminacao-de-palco-copie-o-espaco_169016-14183.jpg"
                                className="img-fluid" />
                                <a href="https://mdbootstrap.com/docs/standard/" target="_blank">
                                <div className="mask"></div>
                                </a>
                            </div>
                            <h5>Bateria acústica: suas vantagens em relação às eletrônicas</h5>

                            <p>
                                No mundo informatizado de hoje, as baterias eletrônicas estão tomando seu espaço. Porém, no artigo de hoje, viemos comentar as vantagens da bateria acústica...
                            </p>
                            <a role="button" className="btn btn-primary" data-mdb-ripple-init
                                href="https://mdbootstrap.com/docs/standard/" target="_blank">Ver artigo completo</a>
                            </section>

                            <section className="text-center">
                            <h5 className="mb-4">Aprenda a tocar violão hoje mesmo!</h5>

                            <div className="embed-responsive embed-responsive-16by9 shadow-4-strong">
                                <iframe className="embed-responsive-item rounded" src="https://www.youtube.com/embed/nuWr5szWMOI?si=Xy2bcYSU2ve2jy0s"
                                allowfullscreen></iframe>
                            </div>
                            </section>
                        </section>
                        </div>
                    </div>
                    </div>
                </main>
            
            <footer className="py-5 bg-dark">
                <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
            </footer>
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            
            <script src="js/scripts.js"></script>
        </div>
    );

}

export default Index;