package com.kocaeli.bel.service.hizmetler;

import com.kocaeli.bel.repository.hizmetler.GeriDonusumRepository;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link GeriDonusumService}.
 */
@Generated
public class GeriDonusumService__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'geriDonusumService'.
   */
  private static BeanInstanceSupplier<GeriDonusumService> getGeriDonusumServiceInstanceSupplier() {
    return BeanInstanceSupplier.<GeriDonusumService>forConstructor(GeriDonusumRepository.class)
            .withGenerator((registeredBean, args) -> new GeriDonusumService(args.get(0)));
  }

  /**
   * Get the bean definition for 'geriDonusumService'.
   */
  public static BeanDefinition getGeriDonusumServiceBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(GeriDonusumService.class);
    beanDefinition.setInstanceSupplier(getGeriDonusumServiceInstanceSupplier());
    return beanDefinition;
  }
}
