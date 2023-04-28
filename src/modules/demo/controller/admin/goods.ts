import { CoolController, BaseController } from '@cool-midway/core';
import { DemoGoodsEntity } from '../../entity/goods';
import { ALL, Body, Inject, Post } from '@midwayjs/decorator';
import { DemoGoodsService } from '../../service/goods';

/**
 * 商品模块-商品信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: DemoGoodsEntity,
})
export class AdminDemoGoodsController extends BaseController {
  @Inject()
  service:DemoGoodsService;

  // 自定义批量新增数据的接口
  @Post('/batchAdd', { summary: '批量新增' })
  async batchAdd(@Body(ALL) params: any) {
    console.log(`批量新增数据：${JSON.stringify(params)}`);
    let data = params.data
    if (!data || data.length <= 0) {
      return this.fail('没有数据');
    }
    await this.service.batchAdd(data);
    return this.ok();
  }

}
