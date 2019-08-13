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
        type: 'success',
        title: 'data has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }
    static AlertError(){
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
    static AlertDontHasPrivilege(){
      Swal.fire({
        position: 'center',
        type: 'warning',
        title: 'Oops...',
        text: 'You dont have acces to this Menu!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }