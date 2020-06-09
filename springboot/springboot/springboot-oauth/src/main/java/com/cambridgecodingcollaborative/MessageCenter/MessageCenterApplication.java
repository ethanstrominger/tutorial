package com.cambridgecodingcollaborative.MessageCenter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@SpringBootApplication
@RestController
public class MessageCenterApplication extends WebSecurityConfigurerAdapter {

	@GetMapping("/user")
	public Map<String, Object> user(@AuthenticationPrincipal OAuth2User principal) {
		String nameValue;
		if (principal == null) {
			nameValue = null;
		} else {
			nameValue = principal.getAttribute("name");
		}
		return Collections.singletonMap("name", nameValue);
	}

	@GetMapping("/error")
	public String error() {
		String message = (String) request.getSession().getAttribute("error.message");
		request.getSession().removeAttribute("error.message");
		return message;
	}

	public static void main(String[] args) {
		SpringApplication.run(MessageCenterApplication.class, args);
	}



		// ...

		@Override
		protected void configure(HttpSecurity http) throws Exception {
			// @formatter:off
			http
					.authorizeRequests(a -> a
							.antMatchers("/", "/error", "/webjars/**","/user").permitAll()
							.anyRequest().authenticated()
					)
					.logout(l -> l
							.logoutSuccessUrl("/").permitAll()
					)
					.csrf(c -> c
							.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
					)
					.failureHandler((request, response, exception) -> {
						request.getSession().setAttribute("error.message", exception.getMessage());
						handler.onAuthenticationFailure(request, response,				.exceptionHandling(e -> e
							.authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
					)	
					.oauth2Login();
			// @formatter:on
		}

	}