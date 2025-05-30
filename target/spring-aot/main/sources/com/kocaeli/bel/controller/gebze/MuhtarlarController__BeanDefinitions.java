package com.kocaeli.bel.controller.gebze;

import com.kocaeli.bel.service.gebze.MuhtarlarService;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link MuhtarlarController}.
 */
@Generated
public class MuhtarlarController__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'muhtarlarController'.
   */
  private static BeanInstanceSupplier<MuhtarlarController> getMuhtarlarControllerInstanceSupplier(
      ) {
    return BeanInstanceSupplier.<MuhtarlarController>forConstructor(MuhtarlarService.class)
            .withGenerator((registeredBean, args) -> new MuhtarlarController(args.get(0)));
  }

  /**
   * Get the bean definition for 'muhtarlarController'.
   */
  public static BeanDefinition getMuhtarlarControllerBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(MuhtarlarController.class);
    beanDefinition.setInstanceSupplier(getMuhtarlarControllerInstanceSupplier());
    return beanDefinition;
  }
}
