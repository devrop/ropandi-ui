import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
  })
  export class SwalUtil {
  
    constructor() { }
  
    static AlertSucces(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'data has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }
    static AlertError(){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
    static AlertDontHasPrivilege(){
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Oops...',
        text: 'You dont have acces to this Menu!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }