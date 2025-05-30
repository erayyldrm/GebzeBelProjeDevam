package com.kocaeli.bel.service.kurumsal;

import com.kocaeli.bel.repository.kurumsal.KurumsalEtikArabuluculukRepository;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link KurumsalEtikArabuluculukService}.
 */
@Generated
public class KurumsalEtikArabuluculukService__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'kurumsalEtikArabuluculukService'.
   */
  private static BeanInstanceSupplier<KurumsalEtikArabuluculukService> getKurumsalEtikArabuluculukServiceInstanceSupplier(
      ) {
    return BeanInstanceSupplier.<KurumsalEtikArabuluculukService>forConstructor(KurumsalEtikArabuluculukRepository.class)
            .withGenerator((registeredBean, args) -> new KurumsalEtikArabuluculukService(args.get(0)));
  }

  /**
   * Get the bean definition for 'kurumsalEtikArabuluculukService'.
   */
  public static BeanDefinition getKurumsalEtikArabuluculukServiceBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(KurumsalEtikArabuluculukService.class);
    beanDefinition.setInstanceSupplier(getKurumsalEtikArabuluculukServiceInstanceSupplier());
    return beanDefinition;
  }
}
