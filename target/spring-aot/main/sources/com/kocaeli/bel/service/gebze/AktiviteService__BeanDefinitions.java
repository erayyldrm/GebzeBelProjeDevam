package com.kocaeli.bel.service.gebze;

import com.kocaeli.bel.repository.gebze.TarihiYerRepositryAktivite;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link AktiviteService}.
 */
@Generated
public class AktiviteService__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'aktiviteService'.
   */
  private static BeanInstanceSupplier<AktiviteService> getAktiviteServiceInstanceSupplier() {
    return BeanInstanceSupplier.<AktiviteService>forConstructor(TarihiYerRepositryAktivite.class)
            .withGenerator((registeredBean, args) -> new AktiviteService(args.get(0)));
  }

  /**
   * Get the bean definition for 'aktiviteService'.
   */
  public static BeanDefinition getAktiviteServiceBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(AktiviteService.class);
    beanDefinition.setInstanceSupplier(getAktiviteServiceInstanceSupplier());
    return beanDefinition;
  }
}
