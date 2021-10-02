//Collection -> Survey -> Question
import { MongooseBaseDirector } from '@thxmike/mongoose-base-director';

import { TenantModelManager } from './managers/tenant-model-manager.js';
import { TenantSchema } from './schema/tenant.js';

export class Director extends MongooseBaseDirector {

  private _tenant_model_manager: any;
   
  get director(): any {
    return {
      "tenant_model_manager": this._tenant_model_manager
    };
  }

  setup_schemas() {

    const tenant_schema = new TenantSchema({}, {}, this.mongoose);
    
    return {
      tenant_schema
    };
  }

  setup_managers(schemas: any) {

    this._tenant_model_manager = new TenantModelManager(
      this.mongoose,
      this.mongoose.model("tenant", schemas.tenant_schema)
    );
  }
}