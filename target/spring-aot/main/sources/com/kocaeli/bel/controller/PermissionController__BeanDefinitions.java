package com.kocaeli.bel.controller;

import com.kocaeli.bel.service.PermissionService;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link PermissionController}.
 */
@Generated
public class PermissionController__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'permissionController'.
   */
  private static BeanInstanceSupplier<PermissionController> getPermissionControllerInstanceSupplier(
      ) {
    return BeanInstanceSupplier.<PermissionController>forConstructor(PermissionService.class)
            .withGenerator((registeredBean, args) -> new PermissionController(args.get(0)));
  }

  /**
   * Get the bean definition for 'permissionController'.
   */
  public static BeanDefinition getPermissionControllerBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(PermissionController.class);
    beanDefinition.setInstanceSupplier(getPermissionControllerInstanceSupplier());
    return beanDefinition;
  }
}
