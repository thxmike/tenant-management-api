import { MongooseBaseSchema } from '@thxmike/mongoose-base-schema';

export class TenantSchema extends MongooseBaseSchema {
    constructor(obj: any, options: any, my_mongoose: any) {

        super(obj, options, my_mongoose);
    
        let additional_schema = {
          "website": {
            "type": String
          },
          "status": {
            "type": String,
            "required": true,
            "enum": ["new", "active", "retired"],
            "default": "new"
          }
        };
        
        // Not required at this level
        delete this.paths.context_id;

        this.add( 
          additional_schema
        )
      }
}
