# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## MILESTONE 1
Mettiamo su un nuovo progetto React aiutandoci con Vite
Ripuliamo come sempre l’app da file e codice di esempio non necessari
Installiamo il necessario: React Router, Axios e Bootstrap (se volete utilizzarlo)

## MILESTONE 2
Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine.
Creiamo 2 pagine:
La home, in cui mostreremo la lista dei film
La pagina di dettaglio di un singolo film

## MILESTONE 3
Configuriamo l’app di backend (repo webapp-express) a ricevere chiamate dalla nostra applicazione React, installando e impostando il middleware CORS
Proviamo quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei libri

## MILESTONE 4
In ultimo, effettuiamo una chiamata AJAX dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, comprese le sue recensioni

### Bonus
Impostare la struttura del lavoro in maniera da sfruttare la riutailizzabilità dei componenti React e le loro props!
Curare l’aspetto estetico della vostra applicazione