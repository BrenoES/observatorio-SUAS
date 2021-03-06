
/*******************************************************
** AUTOMATICALLY CREATED MOBILE LOADING CONFIGURATION **
*******************************************************/

// Please, do not edit this file. It is automatically generated by 'build.mutua.ts' task on every build with information present in 'mutua.instance-project.config.ts' and 'mutua.available.modules.and.components.config.ts'

// Included by 'nativescript/.../components.modules.ts' to load the needed components and modules and make them available to the application

// components
/////////////

import { AppComponent } from '../../components/app.component';
import { MPHomeComponent } from '../../components/pages/mp-home/mp-home.component';
import { MPDadosEIndicadoresComponent } from '../../components/pages/mp-dados-e-indicadores/mp-dados-e-indicadores.component';
import { MPBuscaComponent } from '../../components/pages/mp-busca/mp-busca.component';
import { MPAjudaComponent } from '../../components/pages/mp-ajuda/mp-ajuda.component';
import { MPRankingComponent } from '../../components/pages/mp-ranking/mp-ranking.component';
import { MPMetodologiaComponent } from '../../components/pages/mp-metodologia/mp-metodologia.component';

export const MutuaExportedComponents: any[] = [AppComponent,MPHomeComponent,MPDadosEIndicadoresComponent,MPBuscaComponent,MPAjudaComponent,MPRankingComponent,MPMetodologiaComponent];

// routes
/////////

import { MPHomeRoutes } from '../../components/pages/mp-home/mp-home.routes';
import { MPDadosEIndicadoresRoutes } from '../../components/pages/mp-dados-e-indicadores/mp-dados-e-indicadores.routes';
import { MPBuscaRoutes } from '../../components/pages/mp-busca/mp-busca.routes';
import { MPAjudaRoutes } from '../../components/pages/mp-ajuda/mp-ajuda.routes';
import { MPRankingRoutes } from '../../components/pages/mp-ranking/mp-ranking.routes';
import { MPMetodologiaRoutes } from '../../components/pages/mp-metodologia/mp-metodologia.routes';

export const MutuaExportedRoutes: any[] = [...MPHomeRoutes,...MPDadosEIndicadoresRoutes,...MPBuscaRoutes,...MPAjudaRoutes,...MPRankingRoutes,...MPMetodologiaRoutes];

// modules
//////////


export const MutuaExportedModules: any[] = [];

export const MutuaAppComponent: any = AppComponent;
