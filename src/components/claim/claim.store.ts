import { makeObservable, observable } from 'mobx';
import { QueryOptions } from 'odata-query';
import { SortOrder } from '@library/table/table.models';
import { BaseStore } from '@components/base/stores';
import { ClaimModel } from './claim.models';
import { ClaimService } from './claim.service';
import { UploadStore } from '@library/upload';

export class ClaimStore extends BaseStore<ClaimModel> {
    defaultValues: any = {
        id: '',
        uploadFiles: [],
        uploadStore: new UploadStore(),
    };
    titles = {
        name: 'Claim',
        listName: 'Claims',
    };
    searchCriteria = {
        page: 1,
        pageSize: 10,
        sortField: 'id',
        sortOrder: SortOrder.Descend,
        name: '',
    } as any;
    constructor(patientService: ClaimService) {
        super(patientService);
        makeObservable(this, {
            searchCriteria: observable,
        });
    }

    buildQueryOptions = (
        queryOptions?: Partial<QueryOptions<ClaimModel>>,
    ): Partial<QueryOptions<ClaimModel>> => {
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
