import { DemoGoodsEntity } from './../entity/goods';
import { Provide } from '@midwayjs/decorator';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';

/**
 * 商品示例
 */
@Provide()
export class DemoGoodsService extends BaseService {
  @InjectEntityModel(DemoGoodsEntity)
  demoGoodsEntity: Repository<DemoGoodsEntity>;

  /**
   * 执行sql分页
   */
  async sqlPage(query) {
    return this.sqlRenderPage(
      'select * from demo_goods ORDER BY id ASC',
      query,
      false
    );
  }

  /**
   * 执行entity分页
   */
  async entityPage(query) {
    const find = this.demoGoodsEntity.createQueryBuilder();
    return this.entityRenderPage(find, query);
  }

  async batchAdd(params) {
    console.log(`111`);
    
    for (let i = 0; i < params.length; i++) {
      console.log(`222`);
      
      const entity = DemoGoodsEntity.create(params[i]);
      await this.demoGoodsEntity.save(entity);
    }
  }

}
