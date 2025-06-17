package com.kocaeli.bel.config;

import com.zaxxer.hikari.HikariDataSource;
import org.springframework.boot.autoconfigure.orm.jpa.HibernatePropertiesCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

import javax.sql.DataSource;
import java.util.Properties;

@Configuration
public class HibernateConfig {

    @Bean
    public DataSource dataSource() {
        // HikariCP for better performance
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setDriverClassName("oracle.jdbc.OracleDriver");
        dataSource.setJdbcUrl("jdbc:oracle:thin:@//MUSAPC:1521/FREE");
        dataSource.setUsername("C##Musa");
        dataSource.setPassword("123456");
        dataSource.setMaximumPoolSize(10); // Adjust as per requirements
        return dataSource;
    }

    @Bean
    @Primary
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(dataSource());
        em.setPackagesToScan("com.kocaeli.bel.model"); // Ensure all entities are in this package

        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        em.setJpaVendorAdapter(vendorAdapter);
        em.setJpaProperties(additionalHibernateProperties());


        return em;
    }

    private Properties additionalHibernateProperties() {
        Properties properties = new Properties();

        properties.setProperty("hibernate.dialect", "org.hibernate.dialect.OracleDialect");
        properties.setProperty("hibernate.hbm2ddl.auto", "update");
        properties.setProperty("hibernate.show_sql", "true");
        properties.setProperty("hibernate.format_sql", "true");

        return properties;
    }
    @Bean
    public HibernatePropertiesCustomizer hibernatePropertiesCustomizer() {
        return properties -> {
            properties.put("hibernate.dialect", "org.hibernate.dialect.Oracle12cDialect");
            properties.put("hibernate.jdbc.lob.non_contextual_creation", "true");
        };
    }
}