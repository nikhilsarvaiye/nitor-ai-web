import { makeObservable, observable } from 'mobx';
import { QueryOptions } from 'odata-query';
import { SortOrder } from '@library/table/table.models';
import { BaseStore } from '@components/base/stores';
import { PatientModel } from './patient.models';
import { PatientService } from './patient.service';
import { UploadStore } from '@library/upload';

export class PatientStore extends BaseStore<PatientModel> {
    defaultValues: any = {
        id: '',
        uploadFiles: [],
        uploadStore: new UploadStore(),
    };
    titles = {
        name: 'Patient',
        listName: 'Patients',
    };
    searchCriteria = {
        page: 1,
        pageSize: 10,
        sortField: 'id',
        sortOrder: SortOrder.Descend,
        name: '',
    } as any;
    constructor(patientService: PatientService) {
        super(patientService);
        makeObservable(this, {
            searchCriteria: observable,
        });
    }

    buildQueryOptions = (
        queryOptions?: Partial<QueryOptions<PatientModel>>,
    ): Partial<QueryOptions<PatientModel>> => {
        queryOptions = this.buildDefaultQueryOptions(queryOptions);
        queryOptions.filter = {
            and: [
                this.searchCriteria.name
                    ? {
                          name: {
                              contains: this.searchCriteria.name,
                          },
                      }
                    : {},
                this.searchCriteria.category
                    ? {
                          category: {
                              eq: this.searchCriteria.category,
                          },
                      }
                    : {},
                this.searchCriteria.status
                    ? {
                          status: {
                              eq: this.searchCriteria.status,
                          },
                      }
                    : {},
                this.searchCriteria.tags
                    ? {
                          tag: {
                              eq: this.searchCriteria.tags,
                          },
                      }
                    : {},
            ],
        };
        return queryOptions;
    };
}
