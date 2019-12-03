import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "",
    loadChildren: () => import("./tabs/tabs.module").then(m => m.TabsPageModule)
  },
  {
    path: "cisco1",
    loadChildren: () =>
      import("./pages/cisco1/cisco1.module").then(m => m.Cisco1PageModule)
  },
  {
    path: "cisco2",
    loadChildren: () =>
      import("./pages/cisco2/cisco2.module").then(m => m.Cisco2PageModule)
  },
  {
    path: "cisco3",
    loadChildren: () =>
      import("./pages/cisco3/cisco3.module").then(m => m.Cisco3PageModule)
  },
  {
    path: "cisco4",
    loadChildren: () =>
      import("./pages/cisco4/cisco4.module").then(m => m.Cisco4PageModule)
  },
  {
    path: "dispositivos-de-red",
    loadChildren: () =>
      import("./pages/dispositivos-de-red/dispositivos-de-red.module").then(
        m => m.DispositivosDeRedPageModule
      )
  },
  {
    path: "cable",
    loadChildren: () =>
      import("./pages/cable/cable.module").then(m => m.CablePageModule)
  },
  {
    path: "medios-red-capa-fisica",
    loadChildren: () =>
      import(
        "./pages/medios-red-capa-fisica/medios-red-capa-fisica.module"
      ).then(m => m.MediosRedCapaFisicaPageModule)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then(m => m.LoginPageModule)
  },
  {
    path: "register",
    loadChildren: () =>
      import("./pages/register/register.module").then(m => m.RegisterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
