import React from "react";
import "./SeusDireitos.css";
import abordagem from "../../assets/abordagem policial.jpg";
import igualdade from "../../assets/leidaigualdaderacial.jpg";
import cotas from "../../assets/cotasraciais.jpg";
import saude from "../../assets/Saúde.png";
import racismo from "../../assets/racismo.png";
import mulher from "../../assets/mulher.png";

export default function SeusDireitos() {
	return (
		<section class='direitos'>
			<div class='direitosHero'>
				<div class='container direitosHero__content'>
					<h1 class='direitosHero__content align-text'>
						Conheça <br />
						seus <br /> Direitos
					</h1>
					<img src={mulher} alt='' class='direitosHero__content-img' />
				</div>
			</div>
			{/* <!--  --> */}
			<div class='direitos__content'>
				<div class='container'>
					<p class='direitos__content-paragraph'>
						Os cidadãos devem saber dos seus direitos e deveres para poderem
						reclamar quando necessário porque, se existem direitos, na
						contrapartida há deveres e obrigações que descumpridos podem gerar
						indenização possível de penalizar e assim educar cidadãos, empresas
						e o próprio Estado a buscar funcionar melhor, de acordo com a
						própria Lei Maior, a sua Constituição Federal.
					</p>
				</div>
			</div>
			{/* <!--==================== Cards ====================--> */}
			<div class='direitosBody'>
				<div class='container'>
					<div class='direitosBodys__content'>
						{/* <!-- Cards 1 --> */}
						<article class='direitosBodys_card'>
							<picture class='direitosBodys_card-img'>
								<img
									src={igualdade}
									alt='Braço de um homem negro e braço de um homem branco apertando as mãos'
									class='direitosBodys_card-img'
								/>
							</picture>
							<div class='direitosBodys_card-body'>
								<h4 class='direitosBodys_card-title'>
									Lei da igualdade racial
								</h4>
								<button class='card-btn'>
									<a
										href='#'
										class='direitosBodys_card-btn'
										data-bs-toggle='modal'
										data-bs-target='#modal1'
									>
										Leia Mais
									</a>
								</button>
							</div>
						</article>
						{/* <!-- Cards 2 --> */}
						<article class='direitosBodys_card'>
							<picture class='direitosBodys_card-img'>
								<img
									src={abordagem}
									alt='policiais realizando revista em um homem negro numa blitz'
									class='direitosBodys_card-img'
								/>
							</picture>
							<div class='direitosBodys_card-body'>
								<h4 class='direitosBodys_card-title'>Abordagens Policiais</h4>
								<button class='card-btn'>
									<a
										href='#'
										class='direitosBodys_card-btn'
										data-bs-toggle='modal'
										data-bs-target='#modal2'
									>
										Leia Mais
									</a>
								</button>
							</div>
						</article>
						{/* <!-- Cards 3 --> */}
						<article class='direitosBodys_card'>
							<picture class='direitosBodys_card-img'>
								<img
									src={cotas}
									alt='Jovem negro utilizando computador numa universidade.'
									class='direitosBodys_card-img'
								/>
							</picture>
							<div class='direitosBodys_card-body'>
								<h4 class='direitosBodys_card-title'>Cotas Raciais</h4>
								<button class='card-btn'>
									<a
										href='#'
										class='direitosBodys_card-btn'
										data-bs-toggle='modal'
										data-bs-target='#modal3'
									>
										Leia Mais
									</a>
								</button>
							</div>
						</article>

						<article class='direitosBodys_card'>
							<picture class='direitosBodys_card-img'>
								<img
									src={saude}
									alt='Braço de um homem negro e braço de um homem branco apertando as mãos'
									class='direitosBodys_card-img'
								/>
							</picture>
							<div class='direitosBodys_card-body'>
								<h4 class='direitosBodys_card-title'>
									Política de Saúde da População Negra
								</h4>
								<button class='card-btn'>
									<a
										href='#'
										class='direitosBodys_card-btn'
										data-bs-toggle='modal'
										data-bs-target='#modal4'
									>
										Leia Mais
									</a>
								</button>
							</div>
						</article>

						<article class='direitosBodys_card'>
							<picture class='direitosBodys_card-img'>
								<img
									src={racismo}
									alt='policiais realizando revista em um homem negro numa blitz'
									class='direitosBodys_card-img'
								/>
							</picture>
							<div class='direitosBodys_card-body'>
								<h4 class='direitosBodys_card-title'>
									Injúria Racial e Racismo <br />
									Discriminação
								</h4>
								<button class='card-btn'>
									<a
										href='#'
										class='direitosBodys_card-btn'
										data-bs-toggle='modal'
										data-bs-target='#modal5'
									>
										Leia Mais
									</a>
								</button>
							</div>
						</article>
					</div>
				</div>
			</div>

			<section class='CardModal'>
				<div
					class='modal fade'
					id='modal1'
					tabindex='-1'
					aria-labelledby='exampleModalLabel'
					aria-hidden='true'
				>
					<div class='modal-dialog modal-lg modal-bottom-left modal-side'>
						<div class='modal-content'>
							<a class='modal__close-btn' data-bs-dismiss='modal'>
								<i class='fa-solid fa-circle-xmark'></i>
							</a>
							<div class='modal-body'>
								<h3>Lei da igualdade racial</h3>
								<p>
									Promulgada durante o segundo governo Lula, em 2010, a lei
									12.288 instituiu o Estatuto da Igualdade Racial.
								</p>
								<p>
									Sua função é garantir à população negra a efetivação da
									igualdade de oportunidades, a defesa dos direitos étnicos
									individuais, coletivos e difusos e o combate à discriminação e
									às demais formas de intolerância étnica.
								</p>
								<p>
									Para isso, determina que a igualdade no país será promovida
									por meio de políticas públicas de desenvolvimento econômico e
									social, modificação das estruturas institucionais do Estado
									para o adequado enfrentamento e a superação das desigualdades
									étnicas decorrentes do preconceito.
								</p>
								<p>
									Além disso, propõe a eliminação dos obstáculos históricos,
									socioculturais e institucionais que impedem a representação da
									diversidade étnica nas esferas pública e privada.
								</p>
								<p>
									O Sistema tem por objetivo incentivar a sociedade civil e a
									iniciativa privada a participar da articulação para fortalecer
									e ampliar a defesa dos direitos da população negra. Por meio
									desses sistema, foram criadas as Ouvidorias Permanentes,
									garantindo acesso à Justiça e à Segurança.
								</p>
							</div>
							<a class='modal__close-btn' data-bs-dismiss='modal'>
								<i class='fa-solid fa-circle-xmark'></i>
							</a>
						</div>
					</div>
				</div>

				<div
					class='modal fade'
					id='modal2'
					tabindex='-1'
					aria-labelledby='exampleModalLabel'
					aria-hidden='true'
				>
					<div class='modal-dialog modal-lg'>
						<div class='modal-content'>
							<a class='text-center modal__close-btn' data-bs-dismiss='modal'>
								<i class='fa-solid fa-circle-xmark'></i>
							</a>
							<div class='modal-body'>
								<section class='questions container'>
									<h3 class='subtitle'>
										Abordagens Policiais - Direitos, deveres e dicas de
										compartamento
									</h3>
									<p class='questions_paragraph'>
										<strong>Atenção:</strong> O Policial ao realizar uma
										abordagem sempre estará com a sua arma em punho (pronto para
										usá-la). É o procedimento correto para garantir a própria
										segurança e a de terceiros.
									</p>
									<div class='questions_container'>
										<div class='accordion-item'>
											<h2 class='accordion-header' id='flush-headingthree'>
												<button
													class='accordion-button collapsed'
													type='button'
													data-bs-toggle='collapse'
													data-bs-target='#flush-collapseum'
													aria-expanded='false'
													aria-controls='flush-collapseThree'
												>
													{" "}
													<h6 className='accordion-title'>
														O que é uma Abordagem Policial ?
													</h6>
												</button>
											</h2>
											<div
												id='flush-collapseum'
												class='accordion-collapse collapse'
												aria-labelledby='flush-headingThree'
												data-bs-parent='#accordionFlushExample'
											>
												<div class='accordion-body'>
													<code></code> É o ato de uma Guarnição Policial
													aproximar-se e interpelar pessoa que apresente conduta
													suspeita, a fim de identificá-la e/ou proceder à
													busca, de cuja ação poderá resultar a prisão, a
													apreensão de pessoa ou coisa ou uma simples
													advertência ou orientação. É uma das principais
													atividades realizadas pelos Policiais em seu trabalho
													diário, visando a prevenção de crimes e contravenções.{" "}
												</div>
											</div>
										</div>

										<div
											class='accordion accordion-flush'
											id='accordionFlushExample'
										>
											<div class='accordion-item'>
												<h2 class='accordion-header' id='flush-headingOne'>
													<button
														class='accordion-button collapsed'
														type='button'
														data-bs-toggle='collapse'
														data-bs-target='#flush-collapseOne'
														aria-expanded='false'
														aria-controls='flush-collapseOne'
													>
														<h6 className='accordion-title'>
															O que fazer quando for abordado pela polícia ?
														</h6>
													</button>
												</h2>
												<div
													id='flush-collapseOne'
													class='accordion-collapse collapse'
													aria-labelledby='flush-headingOne'
													data-bs-parent='#accordionFlushExample'
												>
													<div class='accordion-body'>
														{" "}
														<code></code>
														<ul>
															<li>
																Fique calmo, não tente fugir e colabore com o
																Policial ;
															</li>
															<li>Atenda às ordens do Policial ;</li>
															<li>
																Deixe suas mãos visíveis e não faça nenhum
																movimento brusco;
															</li>
															<li>
																Não discuta com o Policial nem toque nele. Não
																faça ameaças (do tipo: “Você sabe com quem está
																falando?”) e não use de palavras defensivas (por
																exemplo: “Sou trabalhador, não sou bandido”).
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div class='accordion-item'>
											<h2 class='accordion-header' id='flush-headingTwo'>
												<button
													class='accordion-button collapsed'
													type='button'
													data-bs-toggle='collapse'
													data-bs-target='#flush-collapseTwo'
													aria-expanded='false'
													aria-controls='flush-collapseTwo'
												>
													<h6 className='accordion-title'>
														Quais são os direitos do cidadão abordado ?
													</h6>
												</button>
											</h2>
											<div
												id='flush-collapseTwo'
												class='accordion-collapse collapse'
												aria-labelledby='flush-headingTwo'
												data-bs-parent='#accordionFlushExample'
											>
												<div class='accordion-body'>
													<code></code>

													<ul>
														<li>
															Saber a identificação do Policial , se assim
															desejar;
														</li>
														<li>
															Ser revistado por Policiais es do mesmo sexo,
															desde que não ocasione prejuízo ao andamento da
															ocorrência (art. 249 do Código de Processo Penal)
														</li>
														<li>
															Acompanhar visualmente a revista realizada no seu
															veículo;
														</li>
														<li>
															Ao término da abordagem, saber o motivo pelo qual
															foi abordado;
														</li>
														<li>
															De ser preso, apenas por ordem judicial ou
															flagrante delito;
														</li>
														<li>
															Ao ser preso, quando for entregue na Delegacia de
															Polícia realizar contato com advogado e/ou alguém
															da família.
														</li>
													</ul>
												</div>
											</div>
										</div>

										<div class='accordion-item'>
											<h2 class='accordion-header' id='flush-headingThree'>
												<button
													class='accordion-button collapsed'
													type='button'
													data-bs-toggle='collapse'
													data-bs-target='#flush-collapseThree'
													aria-expanded='false'
													aria-controls='flush-collapseThree'
												>
													<h6 className='accordion-title'>
														O que fazer se o Policial desrespeitar seus direitos
														ou, de alguma forma, você se sentir prejudicado em
														função da atuação da Polícia ?
													</h6>
												</button>
											</h2>
											<div
												id='flush-collapseThree'
												class='accordion-collapse collapse'
												aria-labelledby='flush-headingThree'
												data-bs-parent='#accordionFlushExample'
											>
												<div class='accordion-body'>
													<code></code> Anote o nome do Policial , o número da
													viatura Polícia, o dia, horário e local em que ocorreu
													o fato e se dirija até a Corregedoria de Polícia para
													que seja formalizada a denúncia. Se houver testemunhas
													do fato, leve consigo dados para que estas pessoas
													possam ser ouvidas no decorrer do procedimento interno
													de apuração, instaurado para averiguar a situação
													denunciada.
												</div>
											</div>
										</div>

										<h6 class='questions_paragraph'>Amparo legal:</h6>
										<p class='questions_paragraph'>
											<i>
												Art. <b>244</b> do <b>CPP</b> – A busca pessoal
												independerá de mandado, no caso de prisão ou quando
												houver fundada suspeita de que a pessoa esteja na posse
												de arma proibida ou de objetos ou papéis que constituam
												corpo de delitou, ou quando a medida for determinada no
												curso de busca domiciliar.
											</i>
										</p>

										<p class='questions_paragraph'>
											<strong>Dicas:</strong> Aconselha-se não exigir do
											Policial a identificação no “calor da emoção” ou durante a
											ação Policial. Espere alguns instantes até que seja
											concluída a abordagem por parte da Polícia.- As
											interjeições para dirigir-se a um representante do BPM em
											ação podem ser “policial” ou “soldado”.
										</p>
									</div>
								</section>
							</div>
							<a class='modal__close-btn' data-bs-dismiss='modal'>
								<i class='fa-solid fa-circle-xmark'></i>
							</a>
						</div>
					</div>
				</div>

				<div
					class='modal fade'
					id='modal3'
					tabindex='-1'
					aria-labelledby='exampleModalLabel'
					aria-hidden='true'
				>
					<div class='modal-dialog modal-lg'>
						<div class='modal-content'>
							<a class='modal__close-btn' data-bs-dismiss='modal'>
								<i class='fa-solid fa-circle-xmark'></i>
							</a>
							<div class='modal-body'>
								<section class='questions container'>
									<h3 class='subtitle'>Cotas Raciais</h3>
									<p class='questions_paragraph'>
										Desde agosto de 2012, o Brasil conta com o sistema de cotas
										raciais regulamentado por meio da Lei n° 12.711. O objetivo
										da ação foi democratizar o acesso ao ensino superior nas
										universidades públicas e às vagas de serviço público para
										diminuir a desigualdade social do país. Além disso, a lei
										foi o início de uma reparação histórica com a população
										negra, que por mais de três séculos foi escravizada, sem que
										houvesse nenhuma ação de reintrodução social.
									</p>
									<div class='questions_container'>
										<div class='accordion-item'>
											<h2 class='accordion-header' id='flush-headingThree'>
												<button
													class='accordion-button collapsed'
													type='button'
													data-bs-toggle='collapse'
													data-bs-target='#flush-collapseThree'
													aria-expanded='false'
													aria-controls='flush-collapseThree'
												>
													<h6 className='accordion-title'>Na universidade.</h6>
												</button>
											</h2>
											<div
												id='flush-collapseThree'
												class='accordion-collapse collapse'
												aria-labelledby='flush-headingThree'
												data-bs-parent='#accordionFlushExample'
											>
												<div class='accordion-body'>
													<code></code> Para se inscrever em universidades
													brasileiras e usufruir das vagas destinadas às cotas,
													o estudante deve assinar um termo onde se autodeclara
													como preto ou parto, que passa a ter validade legal
													para o uso dessa política afirmativa. A lei prevê 50%
													das vagas, em cada curso e turno, em todas as
													universidades e institutos federais. Podem concorrer a
													essas cotas estudantes pretos, pardos, indígenas e
													provenientes do Ensino Médio cursado em escolas
													públicas ou na rede particular com bolsa integral. Nas
													universidades particulares, o sistema de cotas também
													é aplicado no Programa Universidade para Todos
													(Prouni), garantindo os 50% das vagas destinadas para
													essa política afirmativa.
												</div>
											</div>
										</div>

										<div className='accordion-sistema'>
											<div class='accordion-item'>
												<h2 class='accordion-header' id='flush-headingOne'>
													<button
														class='accordion-button collapsed'
														type='button'
														data-bs-toggle='collapse'
														data-bs-target='#flush-collapseOne'
														aria-expanded='false'
														aria-controls='flush-collapseTwo'
													>
														<h6 className='accordion-title'>
															Como entrar na faculdade por meio do sistema de
															cotas ?
														</h6>
													</button>
												</h2>
												<div
													id='flush-collapseOne'
													class='accordion-collapse collapse'
													aria-labelledby='flush-headingTwo'
													data-bs-parent='#accordionFlushExample'
												>
													<div class='accordion-body'>
														<ul>
															<p>
																Para ingressar em um curso superior, seja na
																rede pública ou privada, o estudante deve seguir
																os passos abaixos:
															</p>
															<li>
																Fazer a prova do Enem (Exame Nacional do Ensino
																Médio);
															</li>
															<li>
																Cumprir os pré-requisitos estabelecidos para o
																direito às cotas;
															</li>
															<li>
																Especificar no momento da inscrição que quer
																concorrer às cotas;
															</li>
															<li>Entregar os documentos comprobatórios.</li>
														</ul>
														<p>
															Seja pelo Sisu (Sistema de Seleção Unificada) ou
															pelo Prouni, o estudante deve deixar bem claro que
															quer concorrer às vagas destinadas no momento de
															inscrição. Cada universidade, instituto ou
															faculdade possui requisitos próprios para
															comprovação do candidato, como comprovante de
															renda, histórico escolar, comprovante de
															residência, entre outros. Por isso, no momento de
															sua inscrição, é muito importante prestar bastante
															atenção aos requisitos exigidos pelo curso que
															você está se candidatando. Embora algumas pessoas
															continuem desfavoráveis às cotas, por meio de
															dados, podemos comprovar que, de fato, elas foram
															um passo inicial para a democratização do acesso
															ao ensino superior no Brasil.
														</p>

														<code></code>
													</div>
												</div>
											</div>
										</div>
										<section>
											<div className='accordion-concurso'>
												<div class='accordion-item'>
													<h2 class='accordion-header' id='flush-headingTwo'>
														<button
															class='accordion-button collapsed'
															type='button'
															data-bs-toggle='collapse'
															data-bs-target='#flush-collapseTwo'
															aria-expanded='false'
															aria-controls='flush-collapseFour'
														>
															<h6 className='accordion-title'>
																No concurso público.
															</h6>
														</button>
													</h2>
													<div
														id='flush-collapseTwo'
														class='accordion-collapse collapse'
														aria-labelledby='flush-headingSix'
														data-bs-parent='#accordionFlushExample'
													>
														<div class='accordion-body'>
															<ul>
																<p>
																	Para ingressar em um curso superior, seja na
																	rede pública ou privada, o estudante deve
																	seguir os passos abaixos:
																</p>
																<li>
																	Fazer a prova do Enem (Exame Nacional do
																	Ensino Médio);
																</li>
																<li>
																	Cumprir os pré-requisitos estabelecidos para o
																	direito às cotas;
																</li>
																<li>
																	Especificar no momento da inscrição que quer
																	concorrer às cotas;
																</li>
																<li>Entregar os documentos comprobatórios.</li>
															</ul>
															<p>
																Seja pelo Sisu (Sistema de Seleção Unificada) ou
																pelo Prouni, o estudante deve deixar bem claro
																que quer concorrer às vagas destinadas no
																momento de inscrição. Cada universidade,
																instituto ou faculdade possui requisitos
																próprios para comprovação do candidato, como
																comprovante de renda, histórico escolar,
																comprovante de residência, entre outros. Por
																isso, no momento de sua inscrição, é muito
																importante prestar bastante atenção aos
																requisitos exigidos pelo curso que você está se
																candidatando. Embora algumas pessoas continuem
																desfavoráveis às cotas, por meio de dados,
																podemos comprovar que, de fato, elas foram um
																passo inicial para a democratização do acesso ao
																ensino superior no Brasil.
															</p>{" "}
															<code></code>
														</div>
													</div>
												</div>
											</div>
										</section>
									</div>
								</section>
							</div>

							<a class='modal__close-btn' data-bs-dismiss='modal'>
								<i class='fa-solid fa-circle-xmark'></i>
							</a>
						</div>
					</div>
				</div>

				<div
					class='modal fade'
					id='modal4'
					tabindex='-1'
					aria-labelledby='exampleModalLabel'
					aria-hidden='true'
				>
					<div class='modal-dialog modal-lg modal-bottom-left modal-side'>
						<div class='modal-content'>
							<a class='modal__close-btn' data-bs-dismiss='modal'>
								<i class='fa-solid fa-circle-xmark'></i>
							</a>
							<div class='modal-body'>
								<section class='questions container'>
									<h3 class='subtitle'>
										Política Nacional de Saúde Integral da População Negra
									</h3>
									<p class='questions_paragraph'>
										A desigualdade de raça é estruturante da desigualdade social
										brasileira. Inúmeras são as evidências que apontam as
										barreiras à participação igualitária dos negros em diversos
										campos da vida social e para as consequências que estas
										desigualdades e discriminações produzem não apenas para os
										negros, mas para a sociedade como um todo. O racismo e o
										racismo institucional são práticas que colocam pessoas de
										grupos raciais ou étnicos em situação de desvantagem no
										acesso aos benefícios gerados pela ação das instituições e
										organizações, como, por exemplo, na morosidade da
										implementação de políticas públicas.
									</p>
									<p class='questions_paragraph'>
										No caso da saúde, a redução das desigualdades sociais é um
										dos objetivos do Pacto pela Saúde, que considera como causas
										determinantes e condicionantes de saúde: modos de vida,
										trabalho, habitação, ambiente, educação, lazer, cultura,
										acesso a bens e serviços essenciais, entre outros. Nesse
										sentido, podemos afirmar que o racismo é o principal
										determinante social em saúde para população negra, já que
										incide negativamente sobre todos esses fatores que compõem o
										conceito de saúde.
									</p>
									<p class='questions_paragraph'>
										O Ministério da Saúde compreende a situação de iniquidade e
										vulnerabilidade que afeta a saúde da população negra –
										precocidade dos óbitos, altas taxas de mortalidade materna e
										infantil, maior prevalência de doenças crônicas e
										infecciosas e altos índices de violência – e reconhece que o
										racismo vivenciado pela população negra incide negativamente
										nesses indicadores, comprometendo o acesso dessa população
										aos serviços públicos de saúde, já que a boa qualidade da
										saúde gera condições para a inserção dos sujeitos nas
										diferentes esferas da sociedade de maneira digna, promovendo
										sua autonomia e cidadania.
									</p>
									<p class='questions_paragraph'>
										Por isso, em consonância com o Participa SUS, o Ministério
										da Saúde instituiu, 2009, a Política Nacional de Saúde
										Integral da População Negra.
									</p>
									<p class='questions_paragraph'>
										Essa Política tem como marca: o reconhecimento do racismo,
										das desigualdades étnico-raciais e do racismo institucional
										como determinantes sociais das condições de saúde, com
										vistas à promoção da equidade em saúde. Seu objetivo é
										promover a saúde integral da população negra, priorizando a
										redução das desigualdades étnico-raciais, o combate ao
										racismo e à discriminação nas instituições e nos serviços do
										SUS.
									</p>
									<h3 class='subtitle'>
										Doenças Genéticas ou Hereditárias mais comuns da População
										Negra
									</h3>

									<section class='questions_container'>
										<div class='accordion-item'>
											<h2 class='accordion-header' id='flush-headingtres'>
												<button
													class='accordion-button collapsed'
													type='button'
													data-bs-toggle='collapse'
													data-bs-target='#flush-collapsetres'
													aria-expanded='false'
													aria-controls='flush-collapseThree'
												>
													<h6 className='accordion-title'>
														Anemia falciforme.
													</h6>
												</button>
											</h2>
											<div
												id='flush-collapsetres'
												class='accordion-collapse collapse'
												aria-labelledby='flush-headingThree'
												data-bs-parent='#accordionFlushExample'
											>
												<div class='accordion-body'>
													<code></code>
													Doença hereditária, decorrente de uma mutação genética
													ocorrida há milhares de anos, no continente africano.
													A doença, que chegou ao Brasil pelo tráfico de
													escravos, é causada por um gene recessivo, que pode
													ser encontrado em frequências que variam de 2% a 6% na
													população brasileira em geral, e de 6% a 10% na
													população negra.
												</div>
											</div>
										</div>

										<div class='accordion-item'>
											<h2 class='accordion-header' id='flush-headingquatro'>
												<button
													class='accordion-button collapsed'
													type='button'
													data-bs-toggle='collapse'
													data-bs-target='#flush-collapsequatro'
													aria-expanded='false'
													aria-controls='flush-collapseThree'
												>
													<h6 className='accordion-title'>
														Diabetes mellitus (tipo) II
													</h6>
												</button>
											</h2>
											<div
												id='flush-collapsequatro'
												class='accordion-collapse collapse'
												aria-labelledby='flush-headingThree'
												data-bs-parent='#accordionFlushExample'
											>
												<div class='accordion-body'>
													<code></code>
													Esse tipo de diabetes se desenvolve na fase adulta e
													evolui causando danos em todo o organismo. É a quarta
													causa de morte e a principal causa de cegueira
													adquirida no Brasil. Essa doença atinge com mais
													frequência os homens negros (9% a mais que os homens
													brancos) e as mulheres negras (em torno de 50% a mais
													do que as mulheres brancas).
												</div>
											</div>
										</div>

										<div class='accordion-item'>
											<h2 class='accordion-header' id='flush-headingTwo'>
												<button
													class='accordion-button collapsed'
													type='button'
													data-bs-toggle='collapse'
													data-bs-target='#flush-collapseTwo'
													aria-expanded='false'
													aria-controls='flush-collapseTwo'
												>
													<h6 className='accordion-title'>
														Hipertensão arterial.
													</h6>
												</button>
											</h2>
											<div
												id='flush-collapseTwo'
												class='accordion-collapse collapse'
												aria-labelledby='flush-headingTwo'
												data-bs-parent='#accordionFlushExample'
											>
												<div class='accordion-body'>
													<code></code>A doença, que atinge 10% a 20% dos
													adultos, é a causa direta ou indireta de 12% a 14% de
													todos os óbitos no Brasil. Em geral, a hipertensão é
													mais alta entre os homens e tende ser mais complicada
													em negros, de ambos os sexos. Deficiência de
													glicose-6-fosfato desidrogenase — Afeta mais de 200
													milhões de pessoas no mundo. Apresenta frequência
													relativamente alta em negros americanos (13%) e
													populações do Mediterrâneo, como na Itália e no
													Oriente Médio (5% a 40%). A falta dessa enzima resulta
													na destruição dos glóbulos vermelhos, levando à anemia
													hemolítica e, por ser um distúrbio genético ligado ao
													cromossomo X, é mais frequente nos meninos.
												</div>
											</div>
										</div>

										<div
											class='accordion accordion-flush'
											id='accordionFlushExample'
										>
											<div class='accordion-item'>
												<h2 class='accordion-header' id='flush-headingOne'>
													<button
														class='accordion-button collapsed'
														type='button'
														data-bs-toggle='collapse'
														data-bs-target='#flush-collapseOne'
														aria-expanded='false'
														aria-controls='flush-collapseOne'
													>
														<h6 className='accordion-title'>
															Além da criação da própria PNSIPN, é possível
															identificar outros avanços nas ações voltadas à
															saúde da população negra, com destaque para:
														</h6>
													</button>
												</h2>
												<div
													id='flush-collapseOne'
													class='accordion-collapse collapse'
													aria-labelledby='flush-headingOne'
													data-bs-parent='#accordionFlushExample'
												>
													<div class='accordion-body'>
														<code></code>

														<ul>
															<li>
																Plano Juventude Viva – Prevê ações de prevenção
																para reduzir a vulnerabilidade de jovens negros
																a situações de violência física e simbólica.
															</li>
															<li>
																Portaria nº 1.391, de 16 de agosto de 2005, que
																institui, no âmbito do SUS, as diretrizes para a
																Política Nacional de Atenção Integral às Pessoas
																com Doença Falciforme e outras
																Hemoglobinopatias.
															</li>
															<li>
																Incorporação do transplante de medula para
																tratamento da doença falciforme no âmbito do SUS
																(Portaria SCTIE n° 30, de 30 de junho de 2015).
															</li>
															<li>
																Curso de ensino a distância sobre saúde da
																população negra promovido pelo MS e Universidade
																Aberta do SUS (UNA-SUS), lançada em 27 de
																outubro de 2014).
															</li>
															<li>
																Comitê Técnico de Saúde da População Negra –
																Instituído no âmbito do Ministério da Saúde, é
																um espaço consultivo de participação e controle
																social, com representantes da gestão,
																pesquisadores e movimentos negros.
															</li>
															<li>
																Publicação da Portaria nº 344, de 1º de
																fevereiro de 2017, que padroniza e torna
																obrigatória a coleta e o preenchimento do
																quesito raça/cor do paciente em todos os
																sistemas de informação do SUS, conforme a
																classificação do IBGE, que define cinco
																categorias autodeclaradas: branca, preta,
																amarela, parda e indígena.
															</li>
															<li>
																Publicação, em 30 de março de 2017, do III Plano
																Operativo da 25 Política Nacional de Saúde
																Integral da População Negra (Resolução nº 16, de
																30 de março de 2017). O III Plano Operativo foi
																pactuado e aprovado na Comissão Inter gestores
																Tripartite (CIT) – foro permanente de negociação
																e articulação das esferas de gestão do Sistema
																Único de Saúde (SUS). Com vigência para o
																triênio 2017- 2019, o III Plano Operativo
																estabelece ações de implementação da referida
																política para as gestões federal, estadual e
																municipal do SUS. h) Publicação da Portaria nº
																142, de 21 de julho de 2017, que institui o
																Grupo de Trabalho de Políticas Públicas da
																Igualdade Racial e dá outras providências.
																Conforme o art. 1°, fica instituído o Grupo de
																Trabalho de Políticas Públicas da Igualdade
																Racial com a finalidade de explanar aos órgãos e
																às entidades governamentais e não governamentais
																dos estados e municípios as ações de promoção da
																igualdade racial das políticas públicas
																federais, assim como de propor metas e
																prioridades aplicáveis à realidade local.
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</section>
								</section>
							</div>
							<a class='modal__close-btn' data-bs-dismiss='modal'>
								<i class='fa-solid fa-circle-xmark'></i>
							</a>
						</div>
					</div>
				</div>

				<div
					class='modal fade'
					id='modal5'
					tabindex='-1'
					aria-labelledby='exampleModalLabel'
					aria-hidden='true'
				>
					<div class='modal-dialog modal-lg modal-dialog-centered'>
						<div class='modal-content'>
							<a class='modal__close-btn' data-bs-dismiss='modal'>
								<i class='fa-solid fa-circle-xmark'></i>
							</a>
							<div class='modal-body'>
								<section class='questions container'>
									<h3 class='subtitle'></h3>

									<section class='questions_container'>
										<div class='accordion-item'>
											<h2 class='accordion-header' id='flush-headingTwo'>
												<button
													class='accordion-button collapsed'
													type='button'
													data-bs-toggle='collapse'
													data-bs-target='#flush-collapseTwo'
													aria-expanded='false'
													aria-controls='flush-collapseTwo'
												>
													<h6 className='accordion-title'>
														Injúria Racial e Racismo.
													</h6>
												</button>
											</h2>
											<div
												id='flush-collapseTwo'
												class='accordion-collapse collapse'
												aria-labelledby='flush-headingTwo'
												data-bs-parent='#accordionFlushExample'
											>
												<div class='accordion-body'>
													<code></code>

													<p class='questions_paragraph'>
														O crime de injuria racial está previsto no Código
														Penal brasileiro e consiste em ofender a honra de
														alguém valendo-se de elementos referentes à raça,
														cor, etnia, religião ou origem. Ou seja, diz
														respeito principalmente a situações que envolvem a
														honra de um indivíduo específico, geralmente por
														meio do uso de palavras preconceituosas.
													</p>
													<p class='questions_paragraph'>
														Nesse caso, a vítima pode procurar uma delegacia e
														mover, por si mesmo, um processo contra o agressor,
														sem a necessidade de ação do Ministério Público
														(MP).
													</p>
													<p class='questions_paragraph'>
														O crime de injúria previsto no artigo 140 do Código
														Penal é descrito da seguinte maneira:
														<br />
														Art. 140 - Injuriar alguém, ofendendo-lhe a
														dignidade ou o decoro: Pena - detenção, de um a seis
														meses, ou multa.
													</p>
													<ol class='questions_paragraph'>
														<li>
															O juiz pode deixar de aplicar a pena: <br />
															I - Quando o ofendido, de forma reprovável,
															provocou diretamente a injúria; <br />
															II - No caso de retorsão imediata, que consista em
															outra injúria.
														</li>
														<li>
															Se a injúria consiste em violência ou vias de
															fato, que, por sua natureza ou pelo meio
															empregado, se considerem aviltantes: Pena -
															detenção, de três meses a um ano, e multa, além da
															pena correspondente à violência.
														</li>
														<li>
															Se a injúria consiste na utilização de elementos
															referentes a raça, cor, etnia, religião, origem ou
															a condição de pessoa idosa ou portadora de
															deficiência: (Redação dada pela Lei nº 10.741, de
															2003) Pena - reclusão de um a três anos e multa.
															(Incluído pela Lei nº 9.459, de 1997)
														</li>
													</ol>
													<p class='questions_paragraph'>
														Já o crime de racismo está previsto na previsto na
														Lei 7.716/1989, e ocorre quando o agressor atinge um
														grupo ou coletivo de pessoas, discriminando uma
														etnia de forma geral.
													</p>
													<p class='questions_paragraph'>
														Nesses casos, só o Ministério Público tem
														legitimidade para apresentar denúncia contra o
														agressor.
													</p>
													<p class='questions_paragraph'>
														A lei enquadra uma série de situações como crime de
														racismo. Por exemplo, recusar ou impedir acesso de
														um grupo a estabelecimento comercial, negar ou
														dificultar emprego em empresa privada, entre outros.
													</p>
													<p class='questions_paragraph'>
														Ao contrário da injúria racial, cuja prescrição é de
														oito anos, o crime de racismo é, além de
														inafiançável, imprescritível, conforme determina o
														artigo 5º da Constituição Federal.
													</p>
												</div>
											</div>
										</div>

										<div class='accordion-item'>
											<h2 class='accordion-header' id='flush-headingThree'>
												<button
													class='accordion-button collapsed'
													type='button'
													data-bs-toggle='collapse'
													data-bs-target='#flush-collapseThree'
													aria-expanded='false'
													aria-controls='flush-collapseThree'
												>
													<h6 className='accordion-title'>Discriminação</h6>
												</button>
											</h2>
											<div
												id='flush-collapseThree'
												class='accordion-collapse collapse'
												aria-labelledby='flush-headingThree'
												data-bs-parent='#accordionFlushExample'
											>
												<div class='accordion-body'>
													<code></code>

													<p class='questions_paragraph'>
														Por este termo tem-se a ideia de restrição,
														diferenciação, distinção, apenas se tornando
														aparente caso a conduta seja exteriorizada. Uma
														atitude de exclusão de pessoa ou grupo a partir do
														comportamento de outra pessoa ou grupo, seja em
														relação a raça, origem, religião, classe social,
														sexualidade, ou outras diversas formas de
														diferenciação.
													</p>
													<p class=' tl questions_paragraph'>
														Segundo entendimento de Walter Caneviva: o ato de
														discriminar consiste em ação dolosa do agente
														depreciando alguém, ao tratá-lo diferenciadamente,
														em função de sua raça, cor, etnia, religião ou
														procedência nacional. A discriminação corresponde
														sempre a uma exteriorização intencional de vontade
														do agente, por ação ou omissão, recusando ou
														impedindo o exercício regular do direito pela pessoa
														descriminada.
													</p>
													<p class='questions_paragraph'>
														Portanto, a discriminação consiste em tratar com
														diferença pessoas a partir das diferenciações
														elencadas acima, gerando segregação.
													</p>
												</div>
											</div>
										</div>
									</section>
								</section>
							</div>
							<a class='modal__close-btn' data-bs-dismiss='modal'>
								<i class='fa-solid fa-circle-xmark'></i>
							</a>
						</div>
					</div>
				</div>

				<div
					class='modal fade'
					id='modal6'
					tabindex='-1'
					aria-labelledby='exampleModalLabel'
					aria-hidden='true'
				>
					<div class='modal-dialog modal-lg modal-bottom-left modal-side'>
						<div class='modal-content'>
							<a class='modal__close-btn' data-bs-dismiss='modal'>
								<i class='fa-solid fa-circle-xmark'></i>
							</a>
							<div class='modal-body'></div>
							<a class='modal__close-btn' data-bs-dismiss='modal'>
								<i class='fa-solid fa-circle-xmark'></i>
							</a>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
