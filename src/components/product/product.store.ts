import { makeObservable, observable } from 'mobx';
import { QueryOptions } from 'odata-query';
import { SortOrder } from '@library/table/table.models';
import { BaseStore } from '@components/base/stores';
import { ProductModel } from './product.models';
import { ProductService } from './product.service';
import { UploadStore } from '@library/upload';

export class ProductStore extends BaseStore<ProductModel> {
    defaultValues: any = {
        id: '',
        uploadFiles: [],
        uploadStore: new UploadStore(),
    };
    titles = {
        name: 'Product',
        listName: 'Products',
    };
    searchCriteria = {
        page: 1,
        pageSize: 10,
        sortField: 'id',
        sortOrder: SortOrder.Descend,
        name: '',
    } as any;
    constructor(productService: ProductService) {
        super(productService);
        makeObservable(this, {
            searchCriteria: observable,
        });
    }

    buildQueryOptions = (
        queryOptions?: Partial<QueryOptions<ProductModel>>,
    ): Partial<QueryOptions<ProductModel>> => {
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

    setVariants(model: ProductModel) {
        model.options = model.options || [];
        model.variants = model.variants || [];
        // remove the ones not used
        model.variants.slice().forEach((variant) => {
            // check if exists in options
            const isExistsInOptions = model.options.find(
                (o) => o.name === variant.option && (o.values || []).includes(variant.variant),
            );
            if (!isExistsInOptions) {
                // remove
                model.variants.splice(model.variants.indexOf(variant), 1);
            }
        });
        // add new
        (model.options || [])
            .filter((x) => x)
            .forEach((option) => {
                (option.values || []).forEach((value) => {
                    const variant = model.variants.find(
                        (v) => v.option === option.name && v.variant === value,
                    );
                    if (!variant) {
                        model.variants.push({
                            option: option.name,
                            variant: value,
                            price: model.price,
                            quantity: model.quantity,
                            sku: model.sku,
                        });
                    }
                });
            });

        return model;
    }
}
