// jQuery URL redirection
 $(document).ready( function() {
var currentUrl = window.location.href;
if(currentUrl.substr(-1) === '/') {
        currentUrl = currentUrl.substr(0, currentUrl.length - 1);
    }
var url = {
"http://127.0.0.1:4000/mappa" : "http://127.0.0.1:4000/contatti",
"http://127.0.0.1:4000/news" : "http://127.0.0.1:4000/mappa",
"http://www.academycircus.it/cookie" : "http://www.academycircus.it",
"http://www.academycircus.it/calendario" : "http://www.academycircus.it/news",
"http://www.academycircus.it/mappa" : "http://www.academycircus.it/contatti",
"http://www.academycircus.it/quotes" : "http://www.academycircus.it/news",
"http://www.academycircus.it/tag/juggling" : "http://www.academycircus.it/news",
"http://www.academycircus.it/tag/clave" : "http://www.academycircus.it/news",
"http://www.academycircus.it/tag/giocoleria" : "http://www.academycircus.it/news",
"http://www.academycircus.it/tag/trampoli" : "http://www.academycircus.it/news",
"http://www.academycircus.it/tag/umbria" : "http://www.academycircus.it/news",
"http://www.academycircus.it/tag/perugia" : "http://www.academycircus.it/news",
"http://www.academycircus.it/tag/foligno" : "http://www.academycircus.it/news",
"http://www.academycircus.it/carica-foto" : "http://www.academycircus.it/foto",
"http://www.academycircus.it/idee-carnevale" : "http://www.academycircus.it/idee-carnevale",
"http://www.academycircus.it/gce_feed/calendario" : "http://www.academycircus.it/news",
"http://www.academycircus.it/quotes/726" : "http://www.academycircus.it/news",
"http://www.academycircus.it/carnevale-2014" : "http://www.academycircus.it/2014-03-15-carnevale-dei-ragazzi-di-sant-eraclio",
"http://www.academycircus.it/tag/giocolare" : "http://www.academycircus.it/news",
"http://www.academycircus.it/tag/fachirismo" : "http://www.academycircus.it/news",
"http://www.academycircus.it/animazione-piazza-umbra" : "http://www.academycircus.it/news",
"http://www.academycircus.it/tag/spettacolo-medioevale" : "http://www.academycircus.it/2014-06-10-palio-del-fantasma-castel-ritaldi",
"http://www.academycircus.it/quotes/sempre-ci" : "http://www.academycircus.it/news",
"http://www.academycircus.it/corso-di-giocoleria-e-trampoli-edizione-2016" : "http://www.academycircus.it/2015-09-02-corso-di-giocoleria-e-trampoli-edizione-2016",
"http://www.academycircus.it/workshop-di-giocoleria-paline-clave-foligno-perugia" : "http://www.academycircus.it/2015-05-06-workshop-di-giocoleria-paline-clave-foligno-perugia",
"http://www.academycircus.it/tag/corso-di-trampoli" : "http://www.academycircus.it/news",
"http://www.academycircus.it/tag/teatro-di-strada" : "http://www.academycircus.it/news",
"http://www.academycircus.it/tag/laboratorio-di-giocoleria" : "http://www.academycircus.it/news",
"http://www.academycircus.it/laboratorio-e-giocoleria-e-trampoli-foligno-2014" : "http://www.academycircus.it/2016-02-17-circo-al-castello-domenica-21-febbraio-carnevale-di-santeraclio",
"http://www.academycircus.it/quotes/perche-sei-qui" : "http://www.academycircus.it/news",
"http://www.academycircus.it/circo-al-castello-domenica-21-febbraio-carnevale-di-santeraclio" : "http://www.academycircus.it/2016-02-17-circo-al-castello-domenica-21-febbraio-carnevale-di-santeraclio",
"http://www.academycircus.it/foto/palio-dellarrampicata-gualdo-cattaneo" : "http://www.academycircus.it/2014-06-10-palio-del-fantasma-castel-ritaldi",
"http://www.academycircus.it/giocoleria-teatro-di-strada-trampoli" : "http://www.academycircus.it/news",
"http://www.academycircus.it/foto/spettacolo-palio-fantasma-castel-ritaldi" : "http://www.academycircus.it/2014-06-10-palio-del-fantasma-castel-ritaldi",
"http://www.academycircus.it/spettacolo-castel-ritaldi-palio-del-fantasma" : "http://www.academycircus.it/2014-06-10-palio-del-fantasma-castel-ritaldi",
"http://www.academycircus.it/foto/cena-di-fine-corso-2011" : "http://www.academycircus.it/2011-06-06-cena-di-fine-corso",
"http://www.academycircus.it/guide/come-costruire-le-palline-da-giocoleria" : "http://www.academycircus.it/guide/come-costruire-le-palline-da-giocoleria",
"http://www.academycircus.it/foto/carnevale-dei-ragazzi-di-santeraclio-2014" : "http://www.academycircus.it/2014-03-15-carnevale-dei-ragazzi-di-sant-eraclio",
"http://www.academycircus.it/circo-al-castello-carnevale-di-santeraclio-2016" : "http://www.academycircus.it/2014-03-15-carnevale-dei-ragazzi-di-sant-eraclio",
"http://www.academycircus.it/laboratorio-di-giocoleria-e-movimento-a-foligno" : "http://www.academycircus.it/2012-03-22-laboratorio-di-giocoleria-e-movimento-a-foligno",
"http://www.academycircus.it/foto/carnevale-dei-ragazzi-di-santeraclio-2013" : "http://www.academycircus.it/2013-02-20-carnevale-dei-ragazzi-di-sant-eraclio",
"http://www.academycircus.it/quotes/nella-giocoleria-il-vostro-unico-avversario" : "http://www.academycircus.it/news",
"http://www.academycircus.it/foto/carnevale-dei-ragazzi-di-santeraclio-2012" : "http://www.academycircus.it/2012-02-15-carnevale-dei-ragazzi-di-sant-eraclio",
"http://www.academycircus.it/foto/circo-al-castello-carnevale-di-santeraclio-2016" : "http://www.academycircus.it/2016-03-15-carnevale-dei-ragazzi-di-sant-eraclio",
"http://www.academycircus.it/foto/par-tot-e-palio-dei-trampoli-2011" : "http://www.academycircus.it/2011-08-01-par-tot-e-palio-dei-trampoli",
"http://www.academycircus.it/foto/gareggiare-dei-convivi-giostra-della-quintana-di-foligno-2011" : "http://www.academycircus.it/2011-06-01-gareggiare-dei-convivi-rione-ammanniti-quintana-di-foligno",
"http://www.academycircus.it/foto/stage-di-teatro-di-strada-tenuto-da-peter-weyel-2011" : "http://www.academycircus.it/2011-08-06-stage-di-teatro-di-strada-tenuto-da-peter-weyel",
"http://www.academycircus.it/corso-di-giocoleria-trampoli-e-teatro-di-strada-dal-10-ottobre-2011" : "http://www.academycircus.it/2011-09-16-corso-di-giocoleria-trampoli-e-teatro-di-strada-dal-10-,ottobre-2011",
"http://www.academycircus.it/carnevale-dei-ragazzi-di-santeralcio-31-gennaio-7-e-14-febbraio-2016/" : "http://www.academycircus.it/2016-02-15-carnevale-dei-ragazzi-di-santeralcio-31-gennaio-7-e-14-febbraio-2016"
};
	if(currentUrl in url) {
		// console.log(currentUrl);
		$( location ).attr("href", url[currentUrl]);
	}
 });