package com.kocaeli.bel.service.kurumsal;

import com.kocaeli.bel.repository.kurumsal.YonetimSemasiRepository;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link YonetimSemasiService}.
 */
@Generated
public class YonetimSemasiService__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'yonetimSemasiService'.
   */
  private static BeanInstanceSupplier<YonetimSemasiService> getYonetimSemasiServiceInstanceSupplier(
      ) {
    return BeanInstanceSupplier.<YonetimSemasiService>forConstructor(YonetimSemasiRepository.class)
            .withGenerator((registeredBean, args) -> new YonetimSemasiService(args.get(0)));
  }

  /**
   * Get the bean definition for 'yonetimSemasiService'.
   */
  public static BeanDefinition getYonetimSemasiServiceBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(YonetimSemasiService.class);
    beanDefinition.setInstanceSupplier(getYonetimSemasiServiceInstanceSupplier());
    return beanDefinition;
  }
}
