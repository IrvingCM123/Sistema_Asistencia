import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../listas/FirestoreListas.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Location } from '@angular/common';
import { PostCuentasUseCase } from 'src/app/domain/Formularios/client/getFormulario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  nombre_usuario: string = '';
  correo_usuario: string = '';
  contrasena_usuario: string = '';
  confirmar_contrasena: string = '';
  NPersonal_usuario: number = 0;

  file: File | any = null;
  comparar: boolean = false;
  Mensaje_Contrasena = false;
  Mostrar_Mensaje = false;
  Mostrar_Mensaje_Cuenta = false;
  mostrarBotonAceptar: boolean = false;


  imageURL: string | any;
  Cuenta: string[] | any;
  Mensaje_Cuenta: any;

  constructor(
    private datosLocales: FirestoreService,
    private location: Location,
    private storage: AngularFireStorage,
    private _cuentaCrear: PostCuentasUseCase
  ) {}

  async CrearCuenta() {
    this.compararContraseña(this.contrasena_usuario, this.confirmar_contrasena);
    await this.SubirImagenFirestore();

    this.Cuenta = [
      this.NPersonal_usuario,
      this.contrasena_usuario,
      this.correo_usuario,
      this.imageURL,
    ];

    if (this.comparar == true) {
      console.log(this.Cuenta)
      this._cuentaCrear.postCuentas(this.Cuenta).subscribe(
        (response) => {
          this.Mensaje_Cuenta = "La cuenta ha sido creada con éxito";
          this.Mostrar_Mensaje_Cuenta = true;
          this.mostrarBotonAceptar = true;
        },
        (error) => {
          this.Mensaje_Cuenta = error.error;
          this.Mostrar_Mensaje_Cuenta = true;
          this.mostrarBotonAceptar = true;
        }
      );
    } else {
      this.Mensaje_Contrasena = true;
      setTimeout(() => {
        this.Mensaje_Contrasena = false;
      }, 4000);
    }
  }

  ocultarMensajeCuenta(): void {
    this.Mostrar_Mensaje_Cuenta = false;
    this.mostrarBotonAceptar = false;
  }

  async SubirImagenFirestore() {
    if (this.file) {
      const filePath = `images/${this.file.name}`;
      const fileRef = this.storage.ref(filePath);
      try {
        await this.storage.upload(filePath, this.file);
        const downloadUrl = await fileRef.getDownloadURL().toPromise();
        this.imageURL = downloadUrl;
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  }

  actualizarNombreUsuario(event: Event): void {
    this.nombre_usuario = (event.target as HTMLInputElement).value;
  }

  actualizarCorreo(event: Event): void {
    this.correo_usuario = (event.target as HTMLInputElement).value;
  }

  actualizarContrasena(event: Event): void {
    this.contrasena_usuario = (event.target as HTMLInputElement).value;
  }

  actualizarconfirmarContrasena(event: Event): void {
    this.confirmar_contrasena = (event.target as HTMLInputElement).value;
  }

  actualizarNumeroPersonal(event: Event): void {
    this.NPersonal_usuario = +(event.target as HTMLInputElement).value;
  }

  compararContraseña(contra1: string, contra2: string) {
    if (contra1 == contra2) {
      this.comparar = true;
    } else {
      this.comparar = false;
    }
  }

  GuardarImagen(event: any) {
    this.file = event.target.files[0];
    this.MostrarImagen(this.file);
  }

  MostrarImagen(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageURL = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  IniciarSesion() {
    this.datosLocales.Actualizar_Formulario('login');
    this.datosLocales.guardar_DatoLocal('formulario', 'login');
    this.location.go('/Sistema/Login');
    location.reload();
  }

  ngOnInit(): void {
    this.datosLocales.Actualizar_Login(false);
  }
}
