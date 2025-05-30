package com.kocaeli.bel.controller;

import com.kocaeli.bel.service.DepartmentService;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.InstanceSupplier;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link DepartmentController}.
 */
@Generated
public class DepartmentController__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'departmentController'.
   */
  private static BeanInstanceSupplier<DepartmentController> getDepartmentControllerInstanceSupplier(
      ) {
    return BeanInstanceSupplier.<DepartmentController>forConstructor(DepartmentService.class)
            .withGenerator((registeredBean, args) -> new DepartmentController(args.get(0)));
  }

  /**
   * Get the bean definition for 'departmentController'.
   */
  public static BeanDefinition getDepartmentControllerBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(DepartmentController.class);
    InstanceSupplier<DepartmentController> instanceSupplier = getDepartmentControllerInstanceSupplier();
    instanceSupplier = instanceSupplier.andThen(DepartmentController__Autowiring::apply);
    beanDefinition.setInstanceSupplier(instanceSupplier);
    return beanDefinition;
  }
}
