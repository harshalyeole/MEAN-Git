"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var core_1 = require('@angular/core');
var UtilityHelper = (function () {
  function UtilityHelper() {
    this.add = {
      addButtonContent: '',
      createButtonContent: '',
      cancelButtonContent: '',
      confirmCreate: true,
    };
    this.edit = {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmEdit: true
    };
    // </a><a><i class="fa fa-quora" (click)="tu()" aria-hidden="true"></i>
    this.view = {
      viewButtonContent: '<i class="fa fa-quora" aria-hidden="true"></i>',
      confirmView: true
    };
    this.delete = {
      deleteButtonContent: '<i class="ion-trash-b"></i>',
      confirmDelete: true
    };
    this.settingAdminTable = {
      mode: 'external',
      columns: {
        name: {
          title: 'Organization Name'
        },
        city: {
          title: 'City'
        },
        personalNo: {
          title: 'Vendor Contact Number'
        },
        email: {
          title: 'Vendor Email'
        }
      },
      add: this.add,
      edit: this.edit,
      delete: this.delete
    };
    this.settingCategoryTable = {
      mode: 'external',
      columns: {
        category_name: {
          title: 'Category Name'
        },
      },
      add: this.add,
      edit: this.edit,
      delete: this.delete
    };
    this.settingVendorAdminTable = {
      mode: 'external',
      columns: {
        vendor_name: {
          title: 'Vendor Name'
        },
        vendor_admin_name: {
          title: 'Vendor Admin Name'
        },
        vendor_email: {
          title: 'Vendor Admin Email'
        },
        vendor_mobilenumber: {
          title: 'Vendor Admin Contact Number'
        },
      },
      add: this.add,
      edit: this.edit,
      delete: this.delete
    };
    this.settingsVendorLocationTable = {
      mode: 'external',
      columns: {
        locationName: {
          title: 'Location Name'
        },
        city: {
          title: 'City'
        },
        mobile: {
          title: 'Contact Number'
        },
        email: {
          title: 'Email'
        },
        serviceProvided: {
          title: 'Service Provided'
        }
      },
      add: this.add,
      edit: this.edit,
      delete: this.delete
    };
    this.settingsVendorServiceTable = {
      mode: 'external',
      columns: {
        category: {
          title: 'Category Name'
        },
        name: {
          title: 'Service Name'
        },
        locations: {
          title: 'Locations'
        }
      },
      add: this.add,
      edit: this.edit,
      delete: this.delete
    };
    this.settingLocationAdminTable = {
      mode: 'external',
      columns: {
        location_name: {
          title: 'Location Name'
        },
        locationAdmin_name: {
          title: 'Location Admin Name'
        },
        locationAdmin_email: {
          title: 'Location Admin Email'
        },
        locationAdmin_mobilenumber: {
          title: 'Location Admin Contact Number'
        },
      },
      add: this.add,
      edit: this.edit,
      delete: this.delete
    };
    this.settingsSessionDefinition = {
      mode: 'external',
      columns: {
        serviceName: {
          title: 'Service Name'
        },
        name: {
          title: 'Session Name'
        },
        startTime: {
          title: 'Start Time'
        },
        endTime: {
          title: 'End Time'
        },
        approxServiceTime: {
          title: 'Service TIme'
        }
      },
      add: this.add,
      edit: this.edit,
      delete: this.delete,
    };
    this.settingsUserRelated = {
      mode: 'external',
      columns: {
        name: {
          title: 'User Name'
        },
        mobile_number: {
          title: 'Contact Number'
        },
        token_number: {
          title: 'Token Number'
        }
      },
      add: {
        addButtonContent: '',
        createButtonContent: '',
        cancelButtonContent: '',
        confirmCreate: true,
      },
      edit: {
        editButtonContent: '<i class="ion-edit"></i>',
        saveButtonContent: '<i class="ion-checkmark"></i>',
        cancelButtonContent: '<i class="ion-close"></i>',
        confirmEdit: true
      },
      delete: {
        deleteButtonContent: '<i class="ion-trash-b"></i>',
        confirmDelete: true
      }
    };
  }

  UtilityHelper.prototype.getFormattedDate = function (dates) {
    var date = new Date(dates);
    var displayDate = (date.getUTCMonth() + 1) + '/'
      + date.getDate() + '/' + date.getFullYear();
    return displayDate;
  };
  UtilityHelper.prototype.toTitleCase = function (str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  UtilityHelper = __decorate([
    core_1.Injectable()
  ], UtilityHelper);
  return UtilityHelper;
}());
exports.UtilityHelper = UtilityHelper;
