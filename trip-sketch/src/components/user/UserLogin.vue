<template>
	<div class="bg">
		<div class="page-header clear-filter" filter-color="orange">
			<div class="page-header-image">
				<div class="content">
					<div class="container">
						<div class="col-md-5 ml-auto mr-auto">
							<the-card type="login" plain>
								<div slot="header" class="logo-container">
									<img src="@/assets/now-logo.png" alt="" />
								</div>

								<fg-input
									class="no-border input-lg"
									addon-left-icon="now-ui-icons users_circle-08"
									placeholder="First Name..."
								>
								</fg-input>

								<fg-input
									class="no-border input-lg"
									addon-left-icon="now-ui-icons text_caps-small"
									placeholder="Last Name..."
								>
								</fg-input>

								<template slot="raw-content">
									<div class="card-footer text-center">
										<a href="#pablo" class="btn btn-primary btn-round btn-lg btn-block"
											>Get Started</a
										>
									</div>
									<div class="pull-left">
										<h6>
											<a href="#pablo" class="link footer-link">Create Account</a>
										</h6>
									</div>
									<div class="pull-right">
										<h6>
											<a href="#pablo" class="link footer-link">Need Help?</a>
										</h6>
									</div>
								</template>
							</the-card>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { TheCard, Button, FormGroupInput } from "@/components";
export default {
	name: "UserLogin",
	components: {
		TheCard,
		[Button.name]: Button,
		[FormGroupInput.name]: FormGroupInput,
	},
};
</script>

<style>
.bg {
	min-height: cover;
	background: url("@/assets/login.jpg") center center no-repeat;
	background-size: cover;
}
</style>
