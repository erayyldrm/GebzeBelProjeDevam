package com.kocaeli.bel.controller.kurumsal;

import com.kocaeli.bel.service.kurumsal.KurumsalEtikArabuluculukService;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link KurumsalEtikArabuluculukController}.
 */
@Generated
public class KurumsalEtikArabuluculukController__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'kurumsalEtikArabuluculukController'.
   */
  private static BeanInstanceSupplier<KurumsalEtikArabuluculukController> getKurumsalEtikArabuluculukControllerInstanceSupplier(
      ) {
    return BeanInstanceSupplier.<KurumsalEtikArabuluculukController>forConstructor(KurumsalEtikArabuluculukService.class)
            .withGenerator((registeredBean, args) -> new KurumsalEtikArabuluculukController(args.get(0)));
  }

  /**
   * Get the bean definition for 'kurumsalEtikArabuluculukController'.
   */
  public static BeanDefinition getKurumsalEtikArabuluculukControllerBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(KurumsalEtikArabuluculukController.class);
    beanDefinition.setInstanceSupplier(getKurumsalEtikArabuluculukControllerInstanceSupplier());
    return beanDefinition;
  }
}
